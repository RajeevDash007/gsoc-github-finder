"use client";
import React, { useState } from "react";
import axios from "axios";

interface UserData {
  name?: string;
  avatarUrl?: string;
  bio?: string;
  followers?: number;
  following?: number;
  publicRepos?: number;
  commitCount?: number;
  prCount?: number;
}

const GitHubProfile: React.FC = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData>({});

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername((e.target as HTMLInputElement).value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" ? fetchData() : null;
  };

  const fetchData = async () => {
    try {
      const [resCommits, resIssues, resUser] = await Promise.all([
        axios.get(
          `https://api.github.com/search/commits?q=author:"${username}"`
        ),
        axios.get(
          `https://api.github.com/search/issues?q=author:%22${username}%22+is:pr`
        ),
        axios.get(`https://api.github.com/users/${username}`),
      ]);

      const userDetails = resUser.data;
      const commitCount = resCommits.data.total_count;
      const prCount = resIssues.data.total_count;

      setUserData({
        name: userDetails.name,
        avatarUrl: userDetails.avatar_url,
        bio: userDetails.bio,
        followers: userDetails.followers,
        following: userDetails.following,
        publicRepos: userDetails.public_repos,
        commitCount: commitCount,
        prCount: prCount,
      });
    } catch (error) {
      alert("Invalid GitHub username. Please check again.");
      setUsername("");
      setUserData({});
    }
  };

  const calculatePoints = () => {
    const points = {
      publicRepos: userData.publicRepos ? userData.publicRepos * 200 : 0,
      commitCount: userData.commitCount ? userData.commitCount * 500 : 0,
      prCount: userData.prCount ? userData.prCount * 2000 : 0,
      followers: userData.followers ? userData.followers * 150 : 0,
      following: userData.following ? userData.following * 100 : 0,
    };

    return Object.values(points).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className="flex justify-center lg:mt-30 mt-28 mb-20">
      <div className="w-5/6 lg:w-1/2 bg-black rounded-lg overflow-hidden text-white shadow-md shadow-white  lg:px-20 px-2 py-2 lg:py-10 border-4 border-white">
        <h1 className="lg:text-4xl text-center py-2 lg:py-4 text-xl mb-4">
          GitHub Profile <span className="text-yellow-400">Worth</span>{" "}
          Estimator
        </h1>
        <div className="flex justify-center">
          <input
            value={username}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter GitHub username..."
            className="w-5/2 px-4 py-2 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {Object.keys(userData).length > 0 && (
          <div className="p-2 lg:p-4">
            <div className="flex justify-center">
              <img
                src={userData.avatarUrl}
                alt=""
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
            <h2 className="text-2xl text-center mt-2">{userData.name}</h2>
            <p className="text-center mb-4">{userData.bio}</p>
            <div className="flex justify-center">
              <p className="font-bold text-5xl text-green-400 mb-6">
                $ {calculatePoints()}
              </p>
            </div>

            <div className="p-4 flex flex-col lg:grid lg:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-2 grid gap-1.5 items-center text-xs">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-yellow-400">
                    Public Repositories
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {userData.publicRepos}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-2 grid gap-1.5 items-center text-xs">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-yellow-400">
                    Commit Count
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {userData.commitCount}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-2 grid gap-1.5 items-center text-xs">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-yellow-400">
                    PR Count
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {userData.prCount}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-2 grid gap-1.5 items-center text-xs">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-yellow-400">
                    Followers
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {userData.followers}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-2 grid gap-1.5 items-center text-xs">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight text-yellow-400">
                    Followings
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {userData.following}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfile;
