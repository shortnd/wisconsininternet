import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Wisconsin Internet</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto">
          <article class="shadow-md rounded p-3 border">
            <h1 className="text-lg font-bold text-center my-3">
              Interested in service, reach out to us.
            </h1>
            <hr className="my-3" />
            <ContactForm />
          </article>
        </div>
      </div>
    </>
  );
}
