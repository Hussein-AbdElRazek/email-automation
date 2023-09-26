import dayjs from 'dayjs';

export const eventNameInput =
{
    name: "eventName",
    label: "Event Name",
}
export const templateNameInput =
{
    name: "templateName",
    label: "Template Name",
}
export const emailInput =
{
    type: "email",
    label: "Email",
}
export const emailCredentialsInputs = [
    {
        name: "emailSubject",
        label: "Email Subject",
    },
    {
        name: "emailContent",
        label: "Email Content",
        multiline: true,
        rows: 5
    }
];

export const sendEmailInitialValues = {
    templateName: "",
    eventName: "",
    recivers: [
        { email: "" }
    ],
    emailSubject: "",
    emailContent: "",
    sendAt: dayjs().add(1, 'day')
}