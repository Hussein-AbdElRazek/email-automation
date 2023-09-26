import { Box, Checkbox, Grid, IconButton, Paper, Typography } from "@mui/material"
import { FieldArray, Form, Formik } from "formik"
import { LoadingButton } from "@mui/lab"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import DateTimeInput from "../../components/formik/DateTimeInput"
import { sendEmailValidationSchema } from "./sendEmailValidationSchema"
import Select from "../../components/formik/Select"
import Input from "../../components/formik/Input"
import { emailCredentialsInputs, emailInput, eventNameInput, sendEmailInitialValues, templateNameInput } from "./sendEmailInputsData"

const SendEmailUi = (props) =>
{
    const {
        handleSubmit,
        isLoading,
        isScheduled,
        handleIsScheduled,
    } = props;

    return (
        <Paper
            variant="outlined"
            sx={{
                p: 3,
                m: 5,
                maxWidth: "600px",
                margin: "auto"
            }}
        >
            <Typography variant="h5" mb={2}>Email Data</Typography>
            <Formik
                initialValues={sendEmailInitialValues}
                validationSchema={sendEmailValidationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <Form>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 3, xl: 3 }}
                        >
                            <Grid
                                item
                                xl={4}
                                lg={6}
                                md={6}
                                sm={6}
                                xs={12}
                            >
                                <Select
                                    {...templateNameInput}
                                    options={[{ label: "No template", value: "No template" }]}
                                />
                            </Grid>
                            <Grid
                                item
                                xl={4}
                                lg={6}
                                md={6}
                                sm={6}
                                xs={12}
                            >
                                <Input
                                    {...eventNameInput}
                                />
                            </Grid>
                            <Grid
                                item
                                xl={12}
                                lg={12}
                                md={12}
                                sm={12}
                                xs={12}

                            >
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 2,
                                        maxHeight: 300,
                                        overflowY: "auto",
                                        mb: 2
                                    }}
                                >
                                    <Typography gutterBottom>To</Typography>
                                    <FieldArray name="recivers">
                                        {({ remove, push }) =>
                                        {
                                            return (
                                                formik.values.recivers.map((ele, index) => (
                                                    <Paper
                                                        variant="none"
                                                        key={index}
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: "80%"
                                                            }}
                                                        >
                                                            <Input
                                                                name={`recivers.${index}.email`}
                                                                {...emailInput}
                                                            />
                                                        </Box>

                                                        <Box
                                                            mb="28px"
                                                        >
                                                            <IconButton
                                                                onClick={() => push({ email: "" })}
                                                            >
                                                                <AddRoundedIcon />
                                                            </IconButton>
                                                            {formik.values.recivers.length > 1 && (
                                                                <IconButton
                                                                    onClick={() => remove(index)}
                                                                >
                                                                    <RemoveRoundedIcon />
                                                                </IconButton>

                                                            )}
                                                        </Box>
                                                    </Paper>
                                                ))

                                            )
                                        }}
                                    </FieldArray>
                                </Paper>

                            </Grid>
                            {emailCredentialsInputs.map((input) => (
                                <Grid
                                    key={input.name}
                                    item
                                    xl={12}
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                >
                                    <Input {...input} />
                                </Grid>
                            ))
                            }
                            <Grid
                                item
                                xs={12}
                            >
                                <Checkbox
                                    checked={isScheduled}
                                    onChange={handleIsScheduled}
                                />
                                <Typography display="inline">
                                    Send schedule?
                                </Typography>
                            </Grid>
                            {isScheduled && (
                                <Grid
                                    item
                                    xs={12}
                                >
                                    <DateTimeInput />
                                </Grid>
                            )}
                            <Grid
                                item
                                xs={12}
                            >
                                <LoadingButton
                                    type="submit"
                                    variant="contained"
                                    loading={isLoading}
                                    size="large"
                                    fullWidth
                                >
                                    Send
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}

export default SendEmailUi