import { NextSeo } from "next-seo";
import ContactForm from "../components/ContactForm";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Wisconsin Internet"
        description="A new internet service provider for Southeastern Wisconsin"
      />
      <div className="flex justify-center items-center min-h-screen">
        <div className="container mx-auto">
          <main className="shadow-md rounded p-3 border">
            <h1 className="text-lg font-bold text-center my-3">
              Welcome to Wisconsin Internet.
            </h1>
            <p>Interested in service, reach out to us.</p>
            <hr className="my-3" />
            <ContactForm />
          </main>
        </div>
      </div>
    </>
  );
}
