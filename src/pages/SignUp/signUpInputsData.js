export const signUpInputs = [
    {
        control: "input",
        type: "text",
        name: "bussinesName",
        label: "Business Name",
    },
    {
        control: "input",
        type: "text",
        name: "bussinesIndustry",
        label: "Industry of Business",
    },
    {
        control: "input",
        type: "text",
        name: "userName",
        label: "User Name",
    },
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
    },
    {
        control: "input",
        type: "password",
        name: "password",
        label: "Password",
    },
    {
        control: "input",
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
    },
    {
        control: "input",
        type: "text",
        name: "whyToUse",
        label: "Why you will use our tools?",
    },
];

export const signUpInitialValues = {
    bussinesName: "",
    bussinesIndustry: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    whyToUse: "",
}