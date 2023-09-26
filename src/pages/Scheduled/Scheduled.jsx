import React, { useEffect, useState } from 'react'
import ScheduledUi from './ScheduledUi'
import useHttp from '../../hooks/use-http';
import dayjs from 'dayjs';

const Scheduled = () =>
{
    const {
        isLoading: isLoadingGetScheduledList,
        sendRequest: getScheduledList
    } = useHttp();

    const {
        isLoading: isLoadingCancelScheduledEvent,
        sendRequest: cancelScheduledEvent,
    } = useHttp();

    // i use indexing of pages from zero to handle pagination with data grid
    // and i use in api currentPage + 1 because index from 1
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);

    const [scheduledList, setScheduledList] = useState([]);

    //get all Scheduled List from data base
    useEffect(() =>
    {
        const getResponse = ({ message, data, numOfPages, totalNumOfItems, numOfItems }) =>
        {
            if (message === "success")
            {
                data = data.map((ele) => ({ 
                    ...ele, 
                    id: ele._id,
                    createdAt: dayjs(ele.createdAt).format('HH:mm A MM/DD/YYYY'),
                    sendAt: dayjs(ele.sendAt).format('HH:mm A MM/DD/YYYY'),
                }))
                setScheduledList(data)

                if (numOfPages !== totalPages) setTotalPages(numOfPages)
                if (totalNumOfItems !== totalNumberOfItems) setTotalNumberOfItems(totalNumOfItems)
                if (pageSize !== numOfItems) setPageSize(numOfItems)
            }
        };
        if (currentPage < totalPages)
        {
            getScheduledList(
                {
                    url: `getAllScheduledEvents?page=${currentPage + 1}&limit=10`,
                    method: "GET",
                },
                getResponse
            );
        }
    }, [currentPage])

    const handleCancelScheduledEvent = (scheduledEventId) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                setScheduledList((prev) => prev.length ? prev.filter(ele => ele.id !== scheduledEventId) : [])
            }
        };
        cancelScheduledEvent(
            {
                url: `cancelScheduledEvent/${scheduledEventId}`,
                method: "DELETE",
            },
            getResponse
        );
    }
    return (
        <ScheduledUi 
            rows={scheduledList}
            isLoading={isLoadingGetScheduledList}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalNumberOfItems={totalNumberOfItems}
            handleCancelScheduledEvent={handleCancelScheduledEvent}
            isLoadingCancelScheduledEvent={isLoadingCancelScheduledEvent}
        />
    )
}

export default Scheduled