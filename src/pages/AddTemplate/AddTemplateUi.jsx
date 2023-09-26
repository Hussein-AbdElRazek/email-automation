import { LoadingButton } from "@mui/lab"
import { Grid, Paper, Typography } from "@mui/material"

import Input from "../../components/formik/Input";
import FormContainer from "../../components/formik/FormContainer";
import { templateValidationSchema } from "./templateValidationSchema";
import { templateInitialValues, templateInputs } from "./templateInputsData";
const AddTemplateUi = (props) =>
{
    const {
        handleAddTemplate,
        isLoading,
        details,
        initialValues,
        isEdit,
        handleEditTemplate,
    } = props;
    let templateData = templateInitialValues;
    if (!!details || !!isEdit) templateData = initialValues;
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
            {(!details && !isEdit)&&<Typography variant="h5" mb={2}>Template Data</Typography>}
            <FormContainer
                initialValues={templateData}
                validationSchema={templateValidationSchema}
                onSubmit={isEdit ? handleEditTemplate : handleAddTemplate}
                enableReinitialize
            >
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 3, xl: 3 }}
                >
                    {templateInputs.map((input) => (
                        <Grid
                            item
                            xs={12}
                            key={input.name}
                        >
                            <Input
                                disabled={!!details || isLoading}
                                {...input}
                            />
                        </Grid>
                    ))}
                    {(!details && !isEdit) && (
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
                    )}
                    {(isEdit) && (
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
                                Confirm Edit
                            </LoadingButton>
                        </Grid>
                    )}
                </Grid>
            </FormContainer>
        </Paper>
    )
}

export default AddTemplateUi