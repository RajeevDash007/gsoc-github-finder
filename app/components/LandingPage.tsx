import React from "react";

const LandingPage = () => {
	return (
		<>
			<section className="w-full px-8 text-gray-700  dark:bg-slate-900 ">
				<div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
					<div className="relative flex flex-col md:flex-row">
						<a
							href="#_"
							className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
						>
							<span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
								<span className="text-indigo-600">GGF</span>
							</span>
						</a>
						<nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
							<a
								href="#_"
								className="mr-5 font-medium leading-6 text-gray-300 hover:text-gray-100"
							>
								Home
							</a>
							<a
								href="#_"
								className="mr-5 font-medium leading-6 text-gray-300 hover:text-gray-100"
							>
								Repos
							</a>
						</nav>
					</div>

					<div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
						<a href="https://github.com/RajeevDash007" target="_blank">
							<button
								type="button"
								data-twe-ripple-init
								data-twe-ripple-color="light"
								className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
							>
								<span className="[&>svg]:h-4 [&>svg]:w-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 496 512"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
									</svg>
								</span>
							</button>
						</a>

						<a
							href="https://www.linkedin.com/in/rajeevlochandash/"
							target="_blank"
						>
							<button
								type="button"
								data-twe-ripple-init
								data-twe-ripple-color="light"
								className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
							>
								<span className="[&>svg]:h-4 [&>svg]:w-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 448 512"
									>
										<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
									</svg>
								</span>
							</button>
						</a>

						<a href="https://twitter.com/RajeevDash47" target="_blank">
							<button
								type="button"
								data-twe-ripple-init
								data-twe-ripple-color="light"
								className="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
							>
								<span className="[&>svg]:h-4 [&>svg]:w-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 512 512"
									>
										<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
									</svg>
								</span>
							</button>
						</a>
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
										href="#_"
										target="_blank"
										className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
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
