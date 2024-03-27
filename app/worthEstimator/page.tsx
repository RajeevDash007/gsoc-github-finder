"use client";
import { Navbar } from "../components/Navbar";
import GitHubProfile from "./GitHubProfile";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <Navbar />
      {!user ? (
        <p className="text-pink-500 flex justify-center items-center mt-40 text-2xl">
          Please log in to access this page.
        </p>
      ) : (
        <div>
          <GitHubProfile />
        </div>
      )}
    </div>
  );
}
