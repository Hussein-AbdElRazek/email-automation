import AllTemplatesUi from './AllTemplatesUi'
import useGetAllTemplates from '../../hooks/use-getAllTemplates'
import useHttp from '../../hooks/use-http';
import { useState } from 'react';
import EditTemplateDialog from './EditTemplateDialog';

const AllTemplates = () =>
{
    const {
        allTemplates,
        setAllTemplates,
        isLoadingGetAllTemplates,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalNumberOfItems,
    } = useGetAllTemplates();

    const {
        isLoading: isLoadingDeleteTemplate,
        sendRequest: deleteTemplate,
    } = useHttp();

    const {
        isLoading: isLoadingEditTemplate,
        sendRequest: editTemplate
    } = useHttp();

    const [isEditing, setIsEditing] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState({});

    const handleDeleteTemplate = (templateId) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                setAllTemplates((prev) => prev.length ? prev.filter(ele => ele.id !== templateId) : [])
            }
        };
        deleteTemplate(
            {
                url: `deleteTemplate/${templateId}`,
                method: "PUT",
            },
            getResponse
        );
    }

    const handleEditTemplate = (values, { resetForm }) =>
    {
        const updatedData = {
            templateName: values.templateName,
            emailSubject: values.emailSubject,
            emailContent: values.emailContent,
        }
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                setAllTemplates((prev) => prev.map(ele =>
                {
                    if (ele.id === values.id) ele = { ...ele, ...updatedData }
                    return ele
                }))
                handleCloseEditDialog();
            }
        };
        editTemplate(
            {
                url: `editSpecificTemplate/${values.id}`,
                method: "PATCH",
                body: updatedData,
            },
            getResponse
        );
    }

    const handleOpenEditDialog = (editingTemplateData) =>
    {
        setEditingTemplate(editingTemplateData)
        setIsEditing(true);
    }
    const handleCloseEditDialog = () =>
    {
        setIsEditing(false);
    }
    return (
        <>
            <AllTemplatesUi
                rows={allTemplates}
                isLoading={isLoadingGetAllTemplates}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalNumberOfItems={totalNumberOfItems}
                handleDeleteTemplate={handleDeleteTemplate}
                isLoadingDeleteTemplate={isLoadingDeleteTemplate}
                handleOpenEditDialog={handleOpenEditDialog}
            />
            <EditTemplateDialog
                open={isEditing}
                handleClose={handleCloseEditDialog}
                editingTemplate={editingTemplate}
                handleEditTemplate={handleEditTemplate}
                isLoadingEditTemplate={isLoadingEditTemplate}
            />

        </>

    )
}

export default AllTemplates