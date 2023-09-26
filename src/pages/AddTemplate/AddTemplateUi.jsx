import { LoadingButton } from "@mui/lab"
import { Grid, Paper, Typography } from "@mui/material"
import { useState } from "react";
import Input from "../../components/formik/Input";
import FormContainer from "../../components/formik/FormContainer";
import { templateValidationSchema } from "./templateValidationSchema";
import { templateInitialValues, templateInputs } from "./templateInputsData";
const AddTemplateUi = (props) =>
{
    const { handleAddTemplate, isLoadingAddTemplate, details, initialValues } = props;
    const [templateData, setTemplateData] = useState(templateInitialValues);
    if (!!details) setTemplateData(initialValues)
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
            <Typography variant="h5" mb={2}>Template Data</Typography>
            <FormContainer
                initialValues={templateData}
                validationSchema={templateValidationSchema}
                onSubmit={handleAddTemplate}
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
                                disabled={!!details || isLoadingAddTemplate}
                                {...input}
                            />
                        </Grid>
                    ))}
                    {!details && (
                        <Grid
                            item
                            xs={12}
                        >
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isLoadingAddTemplate}
                                size="large"
                                fullWidth
                            >
                                Send
                            </LoadingButton>
                        </Grid>
                    )}
                </Grid>
            </FormContainer>
        </Paper>
    )
}

export default AddTemplateUi