import { Formik, Form } from "formik";
import { FormikInput } from "components/ui/inputs";
import { Label } from "components/ui/Label";
import styled from "styled-components";
import * as yup from "yup";
import { PrimaryButton } from "components/ui/buttons";

const StyledFormikForm = styled(Form)`
  width: 500px;
  margin: 0 auto;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
`;

export const LoginForm = ({ onSubmit }) => {

    const validationSchema = yup.object().shape({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values }) => (
        <StyledFormikForm>
          <Label>
            <FormikInput name="email" type="input" />
          </Label>
          <Label>
            <FormikInput name="password" type="password" />
          </Label>
          <SubmitButton type="submit">Login</SubmitButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};
