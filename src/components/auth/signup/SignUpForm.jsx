import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { FormikInput } from "components/ui/inputs";
import { Label } from "components/ui/Label";
import styled from "styled-components";
import * as yup from "yup";
import { PrimaryButton } from "components/ui/buttons";
import { routes } from "constants";

const StyledFormikForm = styled(Form)`
  width: 500px;
  margin: 0 auto;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin: 20px auto 0;
  display: block;
  width: fit-content;
`;

export const SignUpForm = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, formik) => onSubmit(values, formik)}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledFormikForm>
            <Label>
              <FormikInput name="email" type="input" />
            </Label>
            <Label>
              <FormikInput name="password" type="password" />
            </Label>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Sign up
            </SubmitButton>
          </StyledFormikForm>
        )}
      </Formik>
      <StyledLink to={routes.LOGIN}>Go to login</StyledLink>
    </>
  );
};
