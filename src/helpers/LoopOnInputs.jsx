import { Grid } from '@mui/material'
import Input from '../components/formik/Input';

export const LoopOnInputs = (props) =>
{
    const { inputs, disabled } = props;
    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 3, xl: 3 }}
        >
            {inputs.map(({ name, ...input }) => (
                <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    key={name}
                >
                    <Input
                        name={name}
                        disabled={disabled}
                        {...input}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
