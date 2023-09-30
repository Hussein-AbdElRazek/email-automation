import React from "react";
import { Field } from "formik";
import { TextField, Tooltip } from "@mui/material";

function Input(props)
{
    const {
        label,
        name,
        type,
        disabled,
        ...rest
    } = props;


    return (
        <Field
            name={name}>
            {({ field, form, meta: { error, touched } }) =>
            {
                const inputError = !!error && touched;
                return (
                    <Tooltip title={type !== "password" && form.values[name]}>
                        <TextField
                            name={name}
                            id={name}
                            type={type}
                            label={label}
                            disabled={disabled}
                            error={inputError}
                            helperText={inputError ?
                                error : " "}
                            fullWidth
                            variant="filled"
                            sx={{ mb: 1 }}
                            {...field}
                            {...rest}
                        />
                    </Tooltip>
                );
            }}
        </Field>
    );
}

export default Input;
