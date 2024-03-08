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


</>
  )
}

export default LandingPage