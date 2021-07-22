import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css';
const re = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export default function App() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        role: 'FullStack',
        gender: '',
        terms: false
      }}
      validate={values => {
        const errors = {};

        if (!values.name) errors.name = 'Name is required';

        if (!values.email) errors.email = 'email is required';
        else if (!re.test(values.email)) errors.email = 'email is invalid';

        if (!values.role) errors.role = 'role is required';
        if (!values.gender) errors.gender = 'gender is required';
        if (!values.terms) errors.terms = 'tick the terms and conditions';

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
      }}
    >
      {({ errors, values, handleChange }) => {
        return (
          <>
            <h1>Job Application</h1>
            <Form>
              <label>Name: </label>
              <Field type="name" name="name" />
              {errors.name ? <p>{errors.name}</p> : ''}
              <br /> <br />
              <label>Email: </label>
              <Field type="email" name="email" />
              {errors.email ? <p>{errors.email}</p> : ''}
              <br />
              <br />
              <div>
                <label>Role applied: </label>
                <select name="role" value={values.role} onChange={handleChange}>
                  <option value="FullStack Developer">Full Stack</option>
                  <option value="Java Developer">JS</option>
                  <option value="Python Developer">Python</option>
                </select>
              </div>
              {errors.role ? <p>{errors.role}</p> : ''}
              <br /> <br />
              <div>
                <label>Gender</label>
                <input
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                />
                Male
                <input
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                />
                Female
                <input
                  name="gender"
                  type="radio"
                  value="other"
                  onChange={handleChange}
                />
                Other
              </div>
              {errors.gender ? <p>{errors.gender}</p> : ''}
              <br />
              <div>
                <input
                  name="terms"
                  type="checkbox"
                  checked={values.terms}
                  onChange={handleChange}
                  required
                />
                <label>Please accept the terms and conditions</label>
              </div>
              {errors.terms ? <p>{errors.terms}</p> : ''}
              <div>
                <input type="submit" />
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

// constructor() {
//   super();
//   this.state = {
//     name: '',
//     email: '',
//     role: 'FullStack',
//     gender: '',
//     terms: '',
//     errors: {
//       name: '',
//       email: '',
//       role: '',
//       gender: '',
//       terms: ''
//     }
//   };
// }

// handleChange = ({ target: { name, value, checked } }) => {
//   if (name === 'terms') value = checked;

//   switch (name) {
//     case 'name': {
//       if (!value) errors.name = 'Name is reauired';
//     }
//     case 'email': {
//       if (!value) errors.name = 'Email is reauired';
//     }
//     case 'role': {
//       if (!value) errors.name = 'Role is reauired';
//     }
//     case 'gender': {
//       if (!value) errors.name = 'Gender is reauired';
//     }
//     case 'terms': {
//       if (!value) errors.name = 'Terms is reauired';
//     }
//   }

//   this.setState({ [name]: value });
// };

// validation = () => {
//   const { name, email, role, gender, terms } = this.state;
//   if (name && email && role && gender && terms) {
//     if (re.test(email)) return true;
//   }
//   return false;
// };
// handleSubmit = event => {
//   event.preventDefault();
//   if (this.validation()) console.log(this.state);
// };
// render() {
// ------------------------------------------------
