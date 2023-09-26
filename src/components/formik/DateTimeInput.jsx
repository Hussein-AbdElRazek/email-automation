import { FormHelperText } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { Field } from 'formik';


const DateTimeInput = (props) =>
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
                            // const dateError = !!error && touched;
                            console.log('form', form)
                            console.log('error', error)
                            // console.log('touched', touched)
                            return (
                                <>
                                    <DateTimePicker
                                        name="sendAt"
                                        defaultValue={dayjs().add(1, 'day')}
                                        minDateTime={dayjs()}
                                        value={form.values.sendAt}
                                        onChange={(value) => form.setFieldValue("sendAt", value.$d)}
                                        fullWidth
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