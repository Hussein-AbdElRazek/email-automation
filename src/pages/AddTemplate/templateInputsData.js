export const templateInputs = [
    {
        name: "templateName",
        label: "Template Name",
    },
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

export const templateInitialValues = {
    templateName: "",
    emailSubject: "",
    emailContent: "",
}