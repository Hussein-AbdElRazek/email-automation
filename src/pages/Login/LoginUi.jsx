import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Link, Typography, Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import FormContainer from '../../components/formik/FormContainer'
import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import Input from '../../components/formik/Input'
import SignUpInCard from '../../components/ui/SignUpInCard'
import SignUpInHeroSection from '../../components/ui/SignUpInHeroSection'
import FormCard from '../../components/ui/FormCard'
const LoginUi = (props) =>
{
    const { handleLogin, isLoadingLogin, handleOpenForgetPassword } = props;
    return (
        <SignUpInCard>
            <SignUpInHeroSection />
            <FormCard
                title="Login"
            >
                <FormContainer
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin}
                >
                    {loginInputs.map((input) => (
                        <Input key={input.name} disabled={isLoadingLogin} {...input} />
                    ))}
                    <Box sx={{ width: "100%", textAlign: "right", mb: 3, mt: -3, fontSize: 14 }}>
                        <Button variant="text" onClick={handleOpenForgetPassword} >
                            Forget password?
                        </Button>
                    </Box>

                    <LoadingButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        loading={isLoadingLogin}
                    >
                        Login
                    </LoadingButton>
                    <Typography variant="body2" mt={2}>
                        {"Don't have an account? "}
                        <Link component={NavLink} to="/signup">
                            Sign Up
                        </Link>
                    </Typography>
                </FormContainer>
            </FormCard>
        </SignUpInCard>
    )
}

export default LoginUi