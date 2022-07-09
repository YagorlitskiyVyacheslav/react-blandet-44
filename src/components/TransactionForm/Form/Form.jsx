import React, { Component } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../../ui/buttons";


export class Form extends Component {
  validationSchema = yup.object().shape(
    {amount: yup.string().required("This field is required")}
  )


  render() {
    return (
      <Formik
      initialValues={{amount: ""}}
      onSubmit={(values) => console.log(values)}
      validationSchema={this.validationSchema}
      >
        {props => (
        <FormikForm>
          <Field name="amount" type="input" value={props.values.amount} onChange={props.handleChange}/>
          <PrimaryButton type="submit">Add {this.props.type}</PrimaryButton>
        </FormikForm>)}
        
      </Formik>
    );
  }
}
