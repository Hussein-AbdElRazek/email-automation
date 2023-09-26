import { useState } from "react";
import useHttp from "../../hooks/use-http";
import SendEmailUi from "./SendEmailUi"

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
    return (
        <SendEmailUi
            handleSubmit={handleSubmit}
            isLoading={isLoadingSendEmailNow || isLoadingSendEmailScheduled}
            isScheduled={isScheduled}
            handleIsScheduled={handleIsScheduled}
        />
    )
}

export default SendEmail