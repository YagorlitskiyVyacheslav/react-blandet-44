import styled from "styled-components";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "components/ui/buttons";
import { FormikInput } from "components/ui/inputs";
import { FormikSelect } from "components/ui/inputs/FormikSelect";
import { currencies } from "constants";
import { Label } from "components/ui/Label";

const StyledFormikForm = styled(FormikForm)`
  width: 500px;
  margin: 0 auto;
`;

export const Form = ({ onSubmit, type }) => {
  const validationSchema = yup.object().shape({
    amount: yup.string().required("This field is required"),
    fee: yup.string().required("This field is required"),
  });

  const options = [
    {
      label: currencies.USD,
      value: currencies.USD,
    },
    {
      label: currencies.UAN,
      value: currencies.UAN,
    },
  ];

  return (
    <Formik
      initialValues={{ amount: "", fee: "" }}
      onSubmit={(values) =>
        onSubmit({
          ...values,
          type,
          created: new Date().getTime(),
        })
      }
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values }) => (
        <StyledFormikForm>
          <Label>
            <FormikInput name="amount" type="input" />
          </Label>
          <Label>
            <FormikSelect
              field={{ name: "fee" }}
              form={{ setFieldValue, value: values.fee }}
              options={options}
            />
          </Label>
          <PrimaryButton type="submit">Add {type}</PrimaryButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};
