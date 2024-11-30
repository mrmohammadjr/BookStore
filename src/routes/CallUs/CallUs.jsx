import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
const CallUs = () => {
  return (
    <div className="bg-green-500">
      <h1 className="lg:my-8 sm:my-0 lg:pt-0 sm:pt-6 lg:text-7xl sm:text-3xl text-white text-center">در فضای مجازی مارو دنبال کنید</h1>
      <div className="lg:w-full lg:flex lg:justify-around sm:grid sm:grid-cols-2 my-10">
        <div className="bg-white lg:w-auto sm:w-[65%] rounded-full p-7 border-8 border-y-green-700 border-x-green-200 lg:m-0 sm:m-7 flex justify-center items-center">
          <FaInstagram className="lg:text-9xl sm:text-6xl text-green-500"/>
        </div>
        <div className="bg-white lg:w-auto sm:w-[65%] rounded-full p-7 border-8 border-y-green-700 border-x-green-200 lg:m-0 sm:m-7 flex justify-center items-center">
          <RiTelegramLine className="lg:text-9xl sm:text-6xl text-green-500"/>
        </div>
        <div className="bg-white lg:w-auto sm:w-[65%] rounded-full p-7 border-8 border-y-green-700 border-x-green-200 lg:m-0 sm:m-7 flex justify-center items-center">
          <FiTwitter className="lg:text-9xl sm:text-6xl text-green-500"/>
        </div>
        <div className="bg-white lg:w-auto sm:w-[65%] rounded-full p-7 border-8 border-y-green-700 border-x-green-200 lg:m-0 sm:m-7 flex justify-center items-center">
          <BiLogoGmail className="lg:text-9xl sm:text-6xl text-green-500"/>
        </div>
      </div>
    </div>
  )
}

export default CallUs