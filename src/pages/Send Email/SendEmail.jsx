import { useState } from "react";
import useHttp from "../../hooks/use-http";
import SendEmailUi from "./SendEmailUi"
import useGetAllTemplates from "../../hooks/use-getAllTemplates";

const SendEmail = () =>
{
    const {
        isLoading: isLoadingSendEmailNow,
        sendRequest: sendEmailNow
    } = useHttp();
    const {
        isLoading: isLoadingSendEmailScheduled,
        sendRequest: sendEmailScheduled
    } = useHttp();

    const {
        isLoadingGetAllTemplates,
        currentPage,
        setCurrentPage,
        totalPages,
        templateOptions,
        templateMap,
    } = useGetAllTemplates();
    const [isScheduled, setIsScheduled] = useState(false);

    const handleIsScheduled = (e) =>
    {
        setIsScheduled(e.target.checked)
    }
    const handleSendNow = (submitData, resetForm) =>
    {
        submitData = {
            ...submitData,
            sendAt: undefined,
        };

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                resetForm();
                setIsScheduled(false)
            }
        };
        sendEmailNow(
            {
                url: "sendEmail",
                method: "POST",
                body: submitData,
            },
            getResponse
        );
    }
    const handleSendScheduled = (submitData, resetForm) =>
    {
        submitData = {
            ...submitData,
            emailCredentials: {
                ...submitData.emailCredentials,
                sendAt: submitData.sendAt,
            },
            sendAt: undefined,
        };

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                resetForm();
                setIsScheduled(false)
            }
        };
        sendEmailScheduled(
            {
                url: "addEvent",
                method: "POST",
                body: submitData,
            },
            getResponse
        );
    }
    const handleSubmit = (values, { resetForm }) =>
    {
        const submitData = {
            ...values,
            emailCredentials: {
                emailSubject: values.emailSubject,
                emailContent: values.emailContent,
            },
            emailSubject: undefined,
            emailContent: undefined,
        };
        if (isScheduled) handleSendScheduled(submitData, resetForm)
        else handleSendNow(submitData, resetForm)

    }
    // handle pagination for templates 
    const handleTemplatesScroll = (event) =>
    {
        const { scrollTop, clientHeight, scrollHeight } = event.target;
        if (scrollTop + clientHeight >= scrollHeight)
        {
            if (currentPage < totalPages)
            {
                setCurrentPage((oldPage) => oldPage + 1)
            }
        }
    };
    const onTemplateChange = (value, form) =>
    {
        if (value === "No template")
        {
            form.setFieldValue("emailSubject", "");
            form.setFieldValue("emailContent", "");
        } else
        {
            const chosenTemplate = templateMap.get(value)
            form.setFieldValue("emailSubject", chosenTemplate.emailSubject);
            form.setFieldValue("emailContent", chosenTemplate.emailContent);
        }

    }
    return (
        <SendEmailUi
            handleSubmit={handleSubmit}
            isLoading={isLoadingSendEmailNow || isLoadingSendEmailScheduled}
            isScheduled={isScheduled}
            handleIsScheduled={handleIsScheduled}
            templateOptions={templateOptions}
            isLoadingGetAllTemplates={isLoadingGetAllTemplates}
            handleTemplatesScroll={handleTemplatesScroll}
            onTemplateChange={onTemplateChange}
        />
    )
}

export default SendEmail