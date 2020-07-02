import Head from "next/head";
import ContactForm from "../components/ContactForm";
import { useFormik } from 'formik'
import * as Yup from 'yup'

import InputElement from '../components/InputElement'

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
            /(WI|wi|Wi)/g,
            "Must be WI, we currently do not support other states"
          ),
        currentProvider: Yup.string().min(2).max(255),
        currentSpeed: Yup.string().matches(
          /([0-9]{1,5})(kb|mb|gb)/g,
          "Please provide speed between 1kb to 100gb"
        ),
      })
    });
  return (
    <>
      <Head>
        <title>Wisconsin Internet</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto">
          <article className="shadow-md rounded p-3 border">
            <h1 className="text-lg font-bold text-center my-3">
              Interested in service, reach out to us.
            </h1>
            <hr className="my-3" />
            <form method="POST" action="">
              <InputElement
                name="firstName"
                text="First Name"
                placeholder="John"
                formik={formik}
                styles={styles}/>
              <InputElement
                name="lastName"
                text="Last Name"
                placeholder="Doe"
                formik={formik}
                styles={styles} />
            </form>
            {/* <ContactForm /> */}
          </article>
        </div>
      </div>
    </>
  );
}
