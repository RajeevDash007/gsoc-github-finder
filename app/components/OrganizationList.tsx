import React from "react";
import organizationsData from "../api/data/2024.json"; // Import the JSON data

const OrganizationList = () => {
  return (
    <div className="antialiased text-slate-300 dark:text-slate-200 bg-slate-900 dark:bg-slate-800 pt-10">
    <div className="grid max-w-[26rem] sm:max-w-[52.5rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      {organizationsData.organizations.map((org) => (
        <div
          key={org.name}
          className="group relative rounded-xl bg-slate-800/80 dark:bg-slate-700/80 p-6 hover:bg-slate-700 dark:hover:bg-slate-600"
        >
          <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-700 dark:bg-slate-600">
            <img
              src={org.image_url}
              alt={org.name}
              width="672"
              height="494"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold mb-2 mt-2">{org.name}</h2>
          <p className="text-slate-400 mb-2">{org.description}</p>
          <div className="bg-orange-600 dark:bg-orange-700 rounded-full px-3 py-1 mb-2 text-center">
            <span className="text-sm">Category: {org.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2 justify-center">
            {org.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-700 dark:bg-slate-600 text-slate-300 dark:text-slate-200 rounded-full px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href={org.guide_url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OrganizationList;
