import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col m-50">
      <h1 className="mb-20 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6x text-white m-5">
        Sign In to explore
        <span className="text-blue-600 dark:text-blue-500">
          {" "}
          GGF&#39;s
        </span>{" "}
        advance features.
      </h1>
      <SignIn />
    </div>
  );
}
