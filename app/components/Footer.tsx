import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/discord";
import "react-social-icons/instagram";
import "react-social-icons/twitter";
import "react-social-icons/linkedin";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-slate-800 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.postimg.cc/13JnbbKX/ggf-high-resolution-logo-transparent.png"
              width="80"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GSoC Github Finder
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="me-4 md:me-6">
                <SocialIcon url="https://github.com/RajeevDash007/gsoc-github-finder" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <SocialIcon url="https://twitter.com/RajeevDash47" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                <SocialIcon url="https://www.linkedin.com/in/rajeevlochandash/" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <SocialIcon url="https://www.instagram.com/rajeevdashofficial/" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Rajeev Lochan Dash
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
