
export const profileDataInputs = [
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
        disabled: true
    },
    {
        control: "input",
        type: "email",
        name: "email",
        label: "Email",
    },
    {
        control: "input",
        type: "text",
        name: "whyToUse",
        label: "Why you will use our tools?",
        disabled:true
    },

]

export const changePasswordDataInputs = [
    {
        control: "input",
        type: "password",
        name: "oldPassword",
        label: "Old Password",
    },
    {
        control: "input",
        type: "password",
        name: "password",
        label: "New Password",
    },
    {
        control: "input",
        type: "password",
        name: "confirmPassword",
        label: "Confirm New Password",
    },
]

export const profileInitialValues = {
    bussinesName: "",
    bussinesIndustry: "",
    userName: "",
    email: "",
    whyToUse: "",
}
export const changePasswordInitialValues = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
}