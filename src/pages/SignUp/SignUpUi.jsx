import { Link, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import FormContainer from '../../components/formik/FormContainer'
import { LoopOnInputs } from '../../helpers/LoopOnInputs';
import { signUpInitialValues, signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';
import SignUpInCard from '../../components/ui/SignUpInCard';
import SignUpInHeroSection from '../../components/ui/SignUpInHeroSection';
import FormCard from '../../components/ui/FormCard';

const SignUpUi = (props) =>
{
  const { handleSignUp, isLoadingSignUp } = props;

  return (
    <SignUpInCard>
      <SignUpInHeroSection />
      <FormCard
        title="Sign Up"
      >
        <FormContainer
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUp}
        >
          <LoopOnInputs
            inputs={signUpInputs}
            disabled={isLoadingSignUp}
          />
          <Box
            sx={{ width: "100%", textAlign: "right" }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoadingSignUp}
              size='large'
            >
              Sign Up
            </LoadingButton>
          </Box>
          <Typography variant="body2" mt={2}>
            {"Have an account already? "}
            <Link component={NavLink} to="/login">
              Login
            </Link>
          </Typography>
        </FormContainer>
      </FormCard>
    </SignUpInCard>
  )
}

export default SignUpUi
