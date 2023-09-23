import { Box, Grid, Typography, useTheme } from '@mui/material'

const FormCard = ({ children, title }) =>
{
    const theme = useTheme();
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                variant='none'
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "calc(100vh - 32px)",
                    overflow: "auto",
                    px: 5,
                    py: 2,
                    [theme.breakpoints.down('md')]: {
                        width: "100%",
                        position: "static",
                    },
                }}
            >
                <Typography color="primary" variant="h4" textAlign="center" mb={5}>{title}</Typography>
                {children}
            </Box>
        </Grid>
    )
}

export default FormCard