import { useEffect, useState } from 'react'
import useHttp from './use-http'
import dayjs from 'dayjs';

const useGetAllTemplates = () =>
{
    const {
        isLoading: isLoadingGetAllTemplates,
        sendRequest: getAllTemplates
    } = useHttp();

    // i use indexing of pages from zero to handle pagination with data grid
    // and i use in api currentPage + 1 because index from 1
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);

    const [allTemplates, setAllTemplates] = useState([]);
    const [templateOptions, setTemplateOptions] = useState([]);
    const [templateMap, setTemplateMap] = useState(new Map());

    //get all Scheduled List from data base
    useEffect(() =>
    {
        const getResponse = ({ message, data, numOfPages, totalNumOfItems, numOfItems }) =>
        {
            if (message === "success")
            {
                let allData = [], templateOptions = [];
                let templateMap = new Map();
                data.forEach((template) =>
                {
                    allData.push(
                        {
                            ...template,
                            id: template._id,
                            createdAt: dayjs(template.createdAt).format('HH:mm A MM/DD/YYYY'),
                        }
                    );
                    templateOptions.push({
                        label: template.templateName,
                        value: template.templateName,
                    })
                    templateMap.set(template.templateName, template)
                })
                setAllTemplates(allData)
                setTemplateOptions(templateOptions)
                setTemplateMap(templateMap)

                if (numOfPages !== totalPages) setTotalPages(numOfPages)
                if (totalNumOfItems !== totalNumberOfItems) setTotalNumberOfItems(totalNumOfItems)
                if (pageSize !== numOfItems) setPageSize(numOfItems)
            }
        };
        if (currentPage < totalPages)
        {
            getAllTemplates(
                {
                    url: `getAllTemplates?page=${currentPage + 1}&limit=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage])
    return {
        allTemplates,
        setAllTemplates,
        isLoadingGetAllTemplates,
        currentPage,
        setCurrentPage,
        setPageSize,
        pageSize,
        totalNumberOfItems,
        templateOptions,
        templateMap,
    }
}

export default useGetAllTemplates