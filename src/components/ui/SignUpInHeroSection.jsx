import { Box, Grid, useTheme } from '@mui/material'
import BigLogo from './BigLogo'

const SignUpInHeroSection = () =>
{
    const theme = useTheme();

    return (
        <Grid
            item
            md={6}
            lg={6}
            xl={6}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1976d2",
                    mx: 2,
                    my: 2,
                    borderRadius: 5,
                    height: "calc(100vh - 32px)",
                    [theme.breakpoints.down('md')]: {
                        display: "none"
                    },
                }}
            >
                <BigLogo />
            </Box>
        </Grid>
    )
}

export default SignUpInHeroSection