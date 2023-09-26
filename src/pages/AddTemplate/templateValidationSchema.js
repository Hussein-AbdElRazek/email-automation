import *  as Yup from 'yup';

export const templateValidationSchema = Yup.object({
    templateName: Yup.string()
        .required("Required"),
    emailSubject: Yup.string()
        .required("Required"),
    emailContent: Yup.string()
        .required("Required"),
});