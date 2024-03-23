import React from "react";

const LandingPage = () => {
  return (
    <>
      <section className="px-2 py-32  dark:bg-slate-900  md:px-0 lg:mt-10">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <span className="block xl:inline">GSoC Github Finder </span>
                  <span className="block text-indigo-600 xl:inline sm:text-3xl md:text-3xl lg:text-4xl">
                    Find Projects Quickly.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Track GSoC organizations, explore their repositories, and find
                  beginner-friendly issues with ease.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#explore-projects"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto "
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/RajeevDash007"
                    target="_blank"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
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
  );
};

export default LandingPage;
