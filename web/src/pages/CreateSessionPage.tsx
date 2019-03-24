import React from "react";
import { Formik, Field, FieldProps } from "formik";
import * as Yup from "yup";
import Api from "../api";
import { Input, TextArea } from "../components/Input";

const ValidationSchema = Yup.object().shape({
  sessionName: Yup.string()
    .trim()
    .required("Required")
    .min(2, "Too Short!")
    .max(200, "Too Long!"),
  nOfVoters: Yup.number()
    .integer("Must be integer!")
    .required("Required")
    .min(2, "Minimum 2 developer required"),
  stories: Yup.string()
    .ensure()
    .trim()
    .required("Minimum 1 story required")
});

interface FormValues {
  sessionName: string;
  nOfVoters: number;
  stories: string;
}

const CreateSessionPage: React.FunctionComponent =() => {
  
  return (
    <div className="create-session-form">
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ sessionName: "", nOfVoters: "", stories: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, actions) => {
          const payload = {
            ...values,
            stories: values.stories.split("\n")
          };
          Api.createSession(payload);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Field
              name="sessionName"
              render={({ field, form }: FieldProps<FormValues>) => (
                <Input
                  {...field}
                  label="Session Name"
                  errMsg={form.errors.sessionName}
                />
              )}
            />

            <Field
              name="nOfVoters"
              render={({ field, form }: FieldProps<FormValues>) => (
                <Input
                  {...field}
                  type="number"
                  label="Number of Voters"
                  errMsg={form.errors.nOfVoters}
                />
              )}
            />
            
            <Field
              name="stories"
              render={({ field, form }: FieldProps<FormValues>) => (
                <TextArea
                  {...field}
                  label="Story List"
                  errMsg={form.errors.stories}
                />
              )}
            />

            <div className="submit-btn-container">
              <button type="submit">Create Session</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default CreateSessionPage;