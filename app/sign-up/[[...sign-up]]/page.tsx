import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col m-50">
      <h1 className="mb-20 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white m-5">
        Sign Up to explore
        <span className="text-blue-600 dark:text-blue-500">
          {" "}
          GGF&#39;s
        </span>{" "}
        advance features.
      </h1>
      <SignUp />
    </div>
  );
}
