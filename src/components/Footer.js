import React from "react";
import sh from "../assets/Shield.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-9 dark:bg-gray-800">
      <span className="text-xl text-black-500 sm:text-center dark:text-black-400">
        © 2022{" "}
        <a href="https://SCSL.com/" className="hover:underline">
          SCSL™ OlUFEMI DOMINGO™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-xl text-black-500 dark:text-black-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            BLESSINGS
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
         FAVOUR
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
          LONG LIFE
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            PROSPERITY
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
