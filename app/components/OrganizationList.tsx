// OrganizationList.js

import React from 'react';
import organizationsData from '../api/data/2024.json'; // Import the JSON data

const OrganizationList = () => {
  return (
    <div className='antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 pt-10'>
    <div className="grid max-w-[26rem] sm:max-w-[52.5rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
      {organizationsData.organizations.map((org) => (
        <div key={org.name} className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
        <div className='aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700'>
          <img src={org.image_url} alt={org.name} width="672" height="494" decoding="async" data-nimg="1" className="absolute inset-0 w-full h-full" />
          </div>
          <h2 className="text-xl font- mb-2 mt-2">{org.name}</h2>
          <p className="text-gray-400 mb-2">{org.description}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {org.category}</p>
          <p className="text-sm text-gray-500 mb-2">Technologies: {org.technologies.join(', ')}</p>
          <a ref={org.guide_url} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit Website</a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OrganizationList;