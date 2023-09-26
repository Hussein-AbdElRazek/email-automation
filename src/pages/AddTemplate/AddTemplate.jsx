import React from 'react'
import AddTemplateUi from './AddTemplateUi'
import useHttp from "../../hooks/use-http";

const AddTemplate = () =>
{
    const {
        isLoading: isLoadingAddTemplate,
        sendRequest: addTemplate
    } = useHttp();
    const handleAddTemplate = (values, { resetForm }) =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                resetForm();
            }
        };
        addTemplate(
            {
                url: "addTemplate",
                method: "PATCH",
                body: values,
            },
            getResponse
        );
    }
    return (
        <AddTemplateUi 
            handleAddTemplate={handleAddTemplate}
            isLoadingAddTemplate={isLoadingAddTemplate}
        />
    )
}

export default AddTemplate