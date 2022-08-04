import styled from "styled-components";
import { useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "components/ui/buttons";
import { FormikInput } from "components/ui/inputs";
import { FormikSelect } from "components/ui/inputs/FormikSelect";
import { Label } from "components/ui/Label";
import { getCurrency } from "api/currency/getCurrency";
import { currencies } from "constants";

const StyledFormikForm = styled(FormikForm)`
  width: 500px;
  margin: 0 auto;
`;

export const Form = ({ onSubmit, type }) => {
  const [currenciesData, setCurrencies] = useState([]);
  useEffect(() => {
    const getCurrencyData = async () => {
      const response = await getCurrency();
      const labels = Object.keys(response.data.rates);
      const values = Object.values(response.data.rates);
      const options = [];
      for (let i = 0; i < labels.length; i += 1) {
        options.push({ label: labels[i], value: values[i] });
      }
      setCurrencies(options);
    };
    getCurrencyData();
  }, []);

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
              currencies={currenciesData}
            />
          </Label>
          <PrimaryButton type="submit">Add {type}</PrimaryButton>
        </StyledFormikForm>
      )}
    </Formik>
  );
};
