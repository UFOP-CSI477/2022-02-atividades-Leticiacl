import { Box, FormGroup, styled } from '@mui/material';
import { Form } from 'formik';
import { FormikTextInput } from '../../components/Inputs';
import colors from '../../styles/colors';

export const GeneratorPageHeader = styled(Box)``;

export const GeneratorPageContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const PasswordInputGenerated = styled(Box)`
  color: white;
  border: thin solid ${colors.orange[500]};
  text-align: center;
  min-height: 55px;
  padding: 10px 20px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  overflow-wrap: break-word;
`;

export const FormGroupStyled = styled(FormGroup)`
  
`;

export const GeneratorLengthInput = styled(FormikTextInput)`
  width: 50px;
  margin-left: 15px;
  input {
    text-align: center;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
  && * {
    color: white !important;
    ::before {
      border-bottom: thin solid white !important;
    }
  }
`;

export const GeneratorForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    align-self: center;
  }
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const GeneratorContentCard = styled(Box)`
  padding: max(15px, 3%);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;
