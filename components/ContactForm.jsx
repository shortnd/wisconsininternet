import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

require("es6-promise").polyfill();
import * as fetch from "isomorphic-fetch";

function ContactForm() {
  const styles = {
    label: "flex flex-col mb-3",
    labelText: "font-semibold",
    input: "border rounded bg-blue-100 text-blue-900 px-3 py-2",
  };
  const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        business: false,
        currentProvider: "",
        currentSpeed: "",
        computerMaintenance: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First Name is Required")
          .max(255)
          .min(2),
        lastName: Yup.string()
          .required("Last Name is Required")
          .max(255)
          .min(2),
        email: Yup.string()
          .email("Must be a valid email address")
          .required("Email is required")
          .min(2)
          .max(255),
        phoneNumber: Yup.string()
          .required("Phone Number is required")
          .matches(phoneRegex, "Please enter a valid phone number"),
        address: Yup.string().required("Address is required").min(5).max(255),
        city: Yup.string().required("City is required").min(2).max(255),
        state: Yup.string()
          .required("State is required")
          .matches(
            /(WI)/g,
            "Must be WI, we currently do not support other states"
          ),
        currentProvider: Yup.string().min(2).max(255),
        currentSpeed: Yup.string().matches(
          /([0-9]{1,5})(kb|mb|gb)/g,
          "Please provide speed between 1kb to 100gb"
        ),
      })}
      validateOnMount={true}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        fetch("/api/contact-us", {
          method: "POST",
          data: values,
        })
          .then(async (res) => await res.json())
          .catch((err) => console.log(err));
      }}
    >
      <Form>
        <div className="flex justify-between md:flex-row flex-col">
          <div className="flex-auto md:mr-3">
            <label htmlFor="firstName" className={styles.label}>
              <span className={styles.labelText}>First Name</span>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                className={styles.input}
                aria-labelledby="firstNameErrors"
                required={true}
                autoComplete="given-name"
              />
            </label>
            <div
              className="text-red-700"
              id="firstNameErrors"
              aria-live="polite"
            >
              <ErrorMessage name="firstName" />
            </div>
          </div>
          <div className="flex-auto">
            <label htmlFor="lastName" className={styles.label}>
              <span className={styles.labelText}>Last Name</span>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                className={styles.input}
                aria-labelledby="lastNameErrors"
                required={true}
                autoComplete="family-name"
              />
            </label>
            <div
              className="text-red-700"
              id="lastNameErrors"
              aria-live="polite"
            >
              <ErrorMessage name="lastName" />
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:mr-3 flex-auto">
            <label htmlFor="email" className={styles.label}>
              <span className={styles.labelText}>Email</span>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="joe@example.com"
                required={true}
                className={styles.input}
                autoComplete="email"
              />
            </label>
            <div className="text-red-700" id="emailErrors" aria-live="polite">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="flex-0">
            <label htmlFor="phoneNumber" className={styles.label}>
              <span className={styles.labelText}>Phone Number</span>
              <Field
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="234-456-7890"
                className={styles.input}
                required={true}
                autoComplete="tel"
              />
            </label>
            <div
              className="text-red-700"
              id="phoneNumberErrors"
              aria-live="polite"
            >
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            <span className={styles.labelText}>Address</span>
            <Field
              type="text"
              name="address"
              id="address"
              placeholder="123 W Main St"
              className={styles.input}
              required={true}
              autoComplete="address-line"
            />
          </label>
          <div className="text-red-700" id="addressErrors" aria-live="polite">
            <ErrorMessage name="address" />
          </div>
        </div>
        <div className="grid md:col-gap-3 md:grid-cols-3">
          <div>
            <label htmlFor="city" className={styles.label}>
              <span className={styles.labelText}>City</span>
              <Field
                type="text"
                name="city"
                id="city"
                placeholder="Milwaukee"
                className={styles.input}
                required={true}
                autoComplete="address-level1"
              />
            </label>
            <div className="text-red-700" id="cityErrors" aria-live="polite">
              <ErrorMessage name="city" />
            </div>
          </div>
          <div>
            <label htmlFor="state" className={styles.label}>
              <span className={styles.labelText}>State</span>
              <Field
                type="text"
                name="state"
                id="state"
                placeholder="WI"
                className={styles.input}
                autoComplete="address-level2"
              />
            </label>
            <div className="text-red-700" id="cityErrors" aria-live="polite">
              <ErrorMessage name="state" />
            </div>
          </div>
          <div>
            <label htmlFor="zip" className={styles.label}>
              <span className={styles.labelText}>Zip</span>
              <Field
                type="text"
                name="zip"
                id="zip"
                className={styles.input}
                placeholder="55555"
                autoComplete="postal-code"
              />
            </label>
            <div className="text-red-700" id="cityErrors" aria-live="polite">
              <ErrorMessage name="zip" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="business">
            <span className={styles.labelText}>
              Is this address a business?
            </span>
            <Field
              name="business"
              id="business"
              type="checkbox"
              className="ml-3"
            />
          </label>
          <div className="text-red-700" id="businessErrors" aria-live="polite">
            <ErrorMessage name="business" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:col-gap-3">
          <div>
            <label htmlFor="currentProvider" className={styles.label}>
              <span className={styles.labelText}>Current Provider</span>
              <Field
                type="text"
                name="currentProvider"
                id="currentProvider"
                className={styles.input}
                placeholder="AT&T"
              />
            </label>
          </div>
          <div>
            <label htmlFor="currentSpeed" className={styles.label}>
              <span className={styles.labelText}>Current Speed</span>
              <Field
                type="text"
                name="currentSpeed"
                id="currentSpeed"
                className={styles.input}
                placeholder="15mb"
              />
            </label>
            <div
              className="text-red-700"
              id="currentSpeedErrors"
              aria-live="polite"
            >
              <ErrorMessage name="currentSpeed" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="computerMaintenance">
            <span className={styles.labelText}>
              Would you like to have your computers maintained by us?
            </span>
            <Field
              name="computerMaintenance"
              id="computerMaintenance"
              required={true}
            >
              {({ field, form, meta }) => (
                <div className="flex items-start flex-col md:flex-row">
                  <div className="md:mr-3">
                    <input
                      type="radio"
                      value="yes"
                      name="yes"
                      id="yes"
                      {...field}
                    />
                    <label htmlFor="yes" className={`${styles.labelText} ml-2`}>
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="no"
                      name="no"
                      id="no"
                      {...field}
                    />
                    <label htmlFor="no" className={`${styles.labelText} ml-2`}>
                      No
                    </label>
                  </div>
                </div>
              )}
            </Field>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 px-3 py-2 rounded text-white"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
