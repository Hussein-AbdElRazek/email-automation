import { Field } from "formik";
import { MenuItem, TextField, Tooltip } from "@mui/material";

function Select(props)
{
    const {
        label,
        name,
        type,
        disabled,
        options,
        ...rest
    } = props;

    return (
        <Field
            name={name}>
            {({ field, form }) =>
            {
                return (
                    <Tooltip title={form.values[name]}>
                        <TextField
                            name={name}
                            id={name}
                            select
                            label={label}
                            disabled={disabled}
                            error={form.errors[name] && form.touched[name] ?
                                true : false}
                            helperText={form.errors[name] && form.touched[name] ?
                                form.errors[name] : " "}
                            fullWidth
                            variant="filled"
                            sx={{ mb: 1 }}
                            {...field}
                            {...rest}
                        >
                            {options.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Tooltip>
                );
            }}
        </Field>
    );
}

export default Select;
