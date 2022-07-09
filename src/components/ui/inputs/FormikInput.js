import styled from 'styled-components';
import { Field } from 'formik';

export const FormikInput = styled(Field)`
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondaryShade2};
  border: 1px solid ${({ theme }) => theme.colors.tertiaryShade};
`;
