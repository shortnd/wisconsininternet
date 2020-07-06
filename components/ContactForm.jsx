import { useState } from "react";
import InputElement from "./InputElement";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const styles = {
    label: "flex flex-col mb-3",
    labelText: "font-semibold",
    input: "border rounded bg-blue-100 text-blue-900 px-3 py-2",
  };
  const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is Required")
        .max(255, "First Name must be less then 255 charaters")
        .min(2, "First Name must be longer then 2 charaters"),
      lastName: Yup.string()
        .required("Last Name is Required")
        .max(255, "Last Name must be less then 255 charaters")
        .min(2, "Last Name must be longer then 2 charaters"),
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Email is required")
        .min(2, "Email must be more then 2 charaters")
        .max(255, "Email must be less then 255 charaters"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(phoneRegex, "Please enter a valid phone number"),
      address: Yup.string()
        .required("Address is required")
        .min(5, "Address must be longer then 5 charaters")
        .max(255, "Address must be less then 255 charaters"),
      city: Yup.string()
        .required("City is required")
        .min(2, "City must be more then 2 charaters")
        .max(255, "City must be less then 255 charaters"),
      state: Yup.string()
        .required("State is required")
        .matches(
          /(WI|wi|Wi)/g,
          "Must be WI, we currently do not support other states"
        ),
      business: Yup.bool(),
      currentProvider: Yup.string()
        .min(2, "Current Provider must be longer then 2 chatarters")
        .max(255, "Current Provider must be less then 255 charaters"),
      currentSpeed: Yup.string().matches(
        /([0-9]{1,5})(kb|mb|gb)/g,
        "Please provide speed between 1kb to 100gb"
      ),
      computerMaintenance: Yup.bool(),
    }),
  });
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      netlify-honeypot="bot-field"
      //   data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <input type="hidden" name="contact-us" value="contact" />
      <div className="hidden">
        <label htmlFor="bot-field">
          <input name="bot-field" />
        </label>
      </div>
      <div className="md:flex md:justify-between">
        <InputElement
          name="firstName"
          text="First Name"
          placeholder="John"
          formik={formik}
          styles={styles}
          className="flex-auto md:mr-3 md:w-1/2"
          required={true}
        />
        <InputElement
          name="lastName"
          text="Last Name"
          placeholder="Doe"
          formik={formik}
          styles={styles}
          className="flex-auto md:w-1/2"
          required={true}
        />
      </div>
      <InputElement
        type="email"
        name="email"
        text="Email"
        placeholder="joe@example.com"
        formik={formik}
        styles={styles}
        required={true}
      />
      <InputElement
        type="tel"
        name="phoneNumber"
        text="Phone Number"
        placeholder="262-123-12345"
        formik={formik}
        styles={styles}
        required={true}
      />
      <div>
        <InputElement
          name="address"
          text="Address"
          placeholder="123 Main St"
          formik={formik}
          styles={styles}
          required={true}
        />
        <div className="md:flex md:justify-between">
          <InputElement
            name="city"
            text="City"
            placeholder="Milwaukee"
            formik={formik}
            styles={styles}
            className="flex-auto md:mr-3"
            required={true}
          />
          <InputElement
            name="state"
            text="State"
            placeholder="WI"
            formik={formik}
            styles={styles}
            className="flex-auto"
            required={true}
          />
        </div>
        <InputElement
          type="checkbox"
          name="business"
          text="Is this a business address?"
          placeholder="business"
          formik={formik}
          styles={styles}
        />
      </div>
      <InputElement
        name="currentProvider"
        text="Current Provider"
        placeholder="AT&T"
        formik={formik}
        styles={styles}
      />
      <InputElement
        name="currentSpeed"
        text="Current Speed"
        placeholder="15mb"
        formik={formik}
        styles={styles}
      />
      <InputElement
        type="checkbox"
        name="computerMaintenance"
        text="Would you like use to provide Computer maintenance for you?"
        placeholder="computerMaintenance"
        formik={formik}
        styles={styles}
      />
      <div className="mb-3">
        {/* <div data-netlify-recaptcha="true"></div> */}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!formik.isValid}
          className={`px-3 py-3 bg-blue-700 text-blue-100 rounded ${
            !formik.isValid ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
