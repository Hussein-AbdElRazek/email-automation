import *  as Yup from 'yup';

export const sendEmailValidationSchema = Yup.object({
    eventName: Yup.string()
        .required("Required"),
    templateName: Yup.string()
        .required("Required"),
    emailSubject: Yup.string()
        .required("Required"),
    emailContent: Yup.string()
        .required("Required"),
    recivers: Yup.array().of(
        Yup.object().shape({
            email: Yup.string().email("Enter a valid e-mail")
                .required("Required"),
        }).required("Required")
    ),
    sendAt: Yup.date().min(new Date(), "The date must be later")

});