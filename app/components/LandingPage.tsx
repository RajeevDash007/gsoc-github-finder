import React from 'react'

const LandingPage = () => {
  return (
    <>
    <section className="w-full px-8 text-gray-700  dark:bg-slate-900 ">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none"><span className="text-indigo-600">GGF</span></span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-300 hover:text-gray-100">Home</a>
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-300 hover:text-gray-100">Repos</a>
                
            </nav>
        </div>
    </div>
</section>

<section className="px-2 py-32  dark:bg-slate-900  md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
            <span className="block xl:inline">GSoC Github Finder </span>
            <span className="block text-indigo-600 xl:inline">Find Project Faster.</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Its never been easier to build beautiful websites that convey your message and tell your story.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              My Repos
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191115191637/How-to-Prepare-For-Google-Summer-of-Code-A-Complete-Guide.png" />
          </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default LandingPage