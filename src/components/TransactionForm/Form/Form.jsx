import React, { Component } from 'react';
// import Select from 'react-select';
import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';
import { PrimaryButton } from '../../ui/buttons';
import { FormikInput } from '../../ui/inputs';
import { FormikSelect } from '../../ui/inputs/FormikSelect';
import { currencies } from '../../../constants';

export class Form extends Component {
  validationSchema = yup.object().shape({
    amount: yup.string().required('This field is required'),
    fee: yup.string().required('This field is required'),
  });

  options = [
    {
      label: currencies.USD,
      value: currencies.USD,
    },
    {
      label: currencies.UAN,
      value: currencies.UAN,
    },
  ];

  render() {
    return (
      <Formik
        initialValues={{ amount: '', fee: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={this.validationSchema}
      >
        {({ setFieldValue, values }) => (
          <FormikForm>
            <FormikInput name="amount" type="input" />
            <FormikSelect
              field={{ name: 'fee' }}
              form={{ setFieldValue, value: values.fee }}
              options={this.options}
            />
            <PrimaryButton type="submit">Add {this.props.type}</PrimaryButton>
          </FormikForm>
        )}
      </Formik>
    );
  }
}
