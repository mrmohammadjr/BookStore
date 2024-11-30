import React from 'react'
import Logo from "../Logo(1).png"
import { FaInstagram } from "react-icons/fa6";
import { RiTelegramLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-white w-full h-auto flex flex-col items-center px-5">
      <img src={Logo} className="lg:my-7 sm:my-3 lg:w-[8%] sm:w-[22%] lg:py-5 sm:py-2.5 bg-green-300 rounded-full" alt={"footerIcon"}/>
      <div className="lg:flex lg:justify-around sm:grid sm:grid-cols-2 w-[100%] mt-4">
        <div className="lg:w-[45%] sm:w-[75%]">
          <h3 className="lg:text-5xl sm:text-xl  text-green-500">درباره ما</h3>
          <p className="lg:text-2xl sm:text-sm">کتابخونه یک برنامه فروش کتاب نیست ، کتابخونه یه کتابخانه جامع برای کتابخوانان است تا بتوانند به کتابهای مورد علاقه خود دسترسی پیدا کنند</p>
        </div>
        <div className="lg:w-[26%] sm:w-[60%]">
          <ul>
            <li className="lg:text-5xl sm:text-xl text-green-500">کلمات مرتبط</li>
            <li className="lg:text-2xl sm:text-sm">کتاب</li>
            <li className="lg:text-2xl sm:text-sm">پادکست</li>
            <li className="lg:text-2xl sm:text-sm">نویسنده</li>
          </ul>
        </div>
        <div className="lg:w-[26%] sm:w-[90%] lg:mt-0 sm:mt-5">
          <ul>
            <li className="lg:text-5xl sm:text-xl text-green-500">توسعه داده شده با</li>
            <li className="lg:text-2xl sm:text-sm">JAVASCRIPT</li>
            <li className="lg:text-2xl sm:text-sm">REACT JS</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center my-5 border-t-8 border-green-500 w-full pt-5">
        <p className="lg:text-4xl sm:text-sm lg:w-[75%] sm:w-[50%]">کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتابخونه است.</p>
        <div className="flex justify-around w-[30%] ">
          <FaInstagram className="text-5xl text-green-500"/>
          <RiTelegramLine className="text-5xl text-green-500"/>
          <FiTwitter className="text-5xl text-green-500"/>
          <BiLogoGmail className="text-5xl text-green-500"/>
        </div>
      </div>
    </div>
  )
}
export default Footer