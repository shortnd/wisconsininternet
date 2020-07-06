import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";

import InputElement from "../components/InputElement";

const styles = {
  label: "flex flex-col mb-3",
  labelText: "font-semibold",
  input: "border rounded bg-blue-100 text-blue-900 px-3 py-2",
};
export default function IndexPage() {
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
        .max(255)
        .min(2),
      lastName: Yup.string().required("Last Name is Required").max(255).min(2),
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
          /(WI|wi|Wi)/g,
          "Must be WI, we currently do not support other states"
        ),
      currentProvider: Yup.string().min(2).max(255),
      currentSpeed: Yup.string().matches(
        /([0-9]{1,5})(kb|mb|gb)/g,
        "Please provide speed between 1kb to 100gb"
      ),
    }),
  });
  return (
    <>
      <Head>
        <title> Wisconsin Internet </title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto">
          <article className="shadow-md rounded p-3 border">
            <h1 className="text-lg font-bold text-center my-3">
              Interested in service, reach out to us.
            </h1>
            <hr className="my-3" />
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
                  className="flex-auto md:mr-3 md:max-w-1/2"
                />
                <InputElement
                  name="lastName"
                  text="Last Name"
                  placeholder="Doe"
                  formik={formik}
                  styles={styles}
                  className="flex-auto md:max-w-1/2"
                />
              </div>
              <InputElement
                type="email"
                name="email"
                text="Email"
                placeholder="joe@example.com"
                formik={formik}
                styles={styles}
              />
              <InputElement
                type="tel"
                name="phoneNumber"
                text="Phone Number"
                placeholder="262-123-12345"
                formik={formik}
                styles={styles}
              />
              <div>
                <InputElement
                  name="address"
                  text="Address"
                  placeholder="123 Main St"
                  formik={formik}
                  styles={styles}
                />
                <div className="md:flex md:justify-between">
                  <InputElement
                    name="city"
                    text="City"
                    placeholder="Milwaukee"
                    formik={formik}
                    styles={styles}
                    className="flex-auto md:mr-3"
                  />
                  <InputElement
                    name="state"
                    text="State"
                    placeholder="WI"
                    formik={formik}
                    styles={styles}
                    className="flex-auto"
                  />
                </div>
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
              <div className="mb-3">
                {/* <div data-netlify-recaptcha="true"></div> */}
              </div>
              <div>
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
          </article>
        </div>
      </div>
    </>
  );
}
