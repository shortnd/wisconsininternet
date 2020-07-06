import Link from "next/link";

const Success = () => (
  <>
    <div className="min-h-screen flex justify-center items-center">
      <div className="shadow p-3 mx-auto border">
        <h1 className="text-2xl font-semibold mb-3">
          Form was successfully submitted.
        </h1>
        <hr className="border-b mb-3" />
        <p className="text-xl">
          Someone will reach out soon, please watch for a phone call or email.
        </p>
        <Link href="/">
          <a className="border-b hover:border-black focus:border-black">Home</a>
        </Link>
      </div>
    </div>
  </>
);

export default Success;
