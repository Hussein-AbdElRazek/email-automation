import { Grid } from '@mui/material'

const SignUpInCard = (props) =>
{
    return (
        <Grid
            container
            direction="row"
            wrap="nowrap"
        >
            {props.children}
        </Grid>
    )
}

export default SignUpInCard