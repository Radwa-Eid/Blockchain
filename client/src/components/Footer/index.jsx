import React from "react";
import { FaBitcoin } from "react-icons/fa";
import './footer.css'

export default function Footer() {
  return (
    <div className="footer w-full flex md:justify-center justify-between items-center flex-col p-4">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-black text-base text-center mx-2 cursor-pointer">
            <FaBitcoin className="footerLogo"/>
          </p>
          <p className="text-black text-base text-center mx-2 cursor-pointer">
            Services
          </p>
          <p className="text-black text-base text-center mx-2 cursor-pointer">
            Exchange
          </p>
          <p className="text-black text-base text-center mx-2 cursor-pointer">
            Transactions
          </p>
          <p className="text-black text-base text-center mx-2 cursor-pointer">
            Wallets
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-black text-sm text-center">
          We always maintain privacy and maintain the quality of our products
        </p>
        <p className="text-black text-sm text-center font-medium mt-2">
          info@GraduationProject.com
        </p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "></div>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-black text-left text-xs">@Exchange Currency 2023</p>
        <p className="text-black text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
}
