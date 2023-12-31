import { FormHelperText } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { Field } from 'formik';


const DateTimeInput = ({ disabled }) =>
{
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DateTimePicker',
                ]}
                sx={{ marginBottom: 3 }}

            >
                <DemoItem label="Send at">
                    <Field
                        name="sendAt"
                    >
                        {({ field, form, meta: error }) =>
                        {
                            return (
                                <>
                                    <DateTimePicker
                                        name="sendAt"
                                        defaultValue={dayjs().add(1, 'day')}
                                        minDateTime={dayjs()}
                                        value={form.values.sendAt}
                                        onChange={(value) => form.setFieldValue("sendAt", value.$d)}
                                        fullWidth
                                        disabled={disabled}
                                    />
                                    {(!!error) && (<FormHelperText sx={{ color: "#d32f2f", paddingLeft:"14px" }} >{error.error}</FormHelperText>)}
                                </>

                            )
                        }}
                    </Field>

                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DateTimeInput