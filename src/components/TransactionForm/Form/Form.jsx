import styled from "styled-components";
import { useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "components/ui/buttons";
import { FormikInput } from "components/ui/inputs";
import { FormikSelect } from "components/ui/inputs/FormikSelect";
import { Label } from "components/ui/Label";

const StyledFormikForm = styled(FormikForm)`
  width: 500px;
  margin: 0 auto;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
`;

export const Form = ({ onSubmit, type, currenciesData }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  useEffect(() => {
    const getCurrencyData = async () => {
      setSelectOptions(
        Object.entries(currenciesData).map((el) => ({
          label: el[0],
          value: el[0],
        }))
      );
    };
    getCurrencyData();
  }, [currenciesData]);

  const validationSchema = yup.object().shape({
    amount: yup.string().required("This field is required"),
    fee: yup.string().required("This field is required"),
  });

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
              options={selectOptions}
            />
          </Label>
          <SubmitButton type="submit">Add {type}</SubmitButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};
