"use client";
import { Navbar } from "../components/Navbar";
import GitHubProfile from "./GitHubProfile";
import { useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <Navbar />
      {!user ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-5xl text-yellow-500 mr-2">&#9888;</span>
              <p className="text-lg font-semibold">
                Log In to Access this page
              </p>
            </div>
            <SignInButton afterSignInUrl="/worthEstimator">
              <a
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                href="/sign-in"
              >
                Login
              </a>
            </SignInButton>
          </div>
        </div>
      ) : (
        <div>
          <GitHubProfile />
        </div>
      )}
    </div>
  );
}
