import { Field } from "formik";
import { Box, CircularProgress, MenuItem, TextField, Tooltip } from "@mui/material";

function Select(props)
{
    const {
        label,
        name,
        type,
        disabled,
        options,
        isLoading,
        handleSelectScroll,
        onChange,
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
                            sx={{
                                mb: 1,
                            }}
                            {...field}
                            {...rest}
                            SelectProps={{
                                MenuProps:
                                {
                                    PaperProps: {
                                        onScroll: handleSelectScroll
                                    }
                                }
                            }}
                            onChange={
                                typeof onChange === "function"
                                    ? (e) =>
                                    {
                                        form.setFieldValue(
                                            name,
                                            e.target.value
                                        );
                                        props.onChange(e.target.value, form);
                                    }
                                    : (e) =>
                                    {
                                        form.setFieldValue(
                                            name,
                                            e.target.value
                                        );
                                    }
                            }
                        >
                            {options.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            {isLoading && (
                                <Box sx={{ width: "100%", textAlign: "center", mt: 1 }}>
                                    <CircularProgress size={20} />
                                </Box>
                            )}
                        </TextField>
                    </Tooltip>
                );
            }}
        </Field >
    );
}

export default Select;
