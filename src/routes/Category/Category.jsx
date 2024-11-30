import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { GiMaterialsScience,GiDramaMasks,GiArtilleryShell,GiSpartanHelmet } from "react-icons/gi";
import { RiCriminalFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { FaHeart,FaChild } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const Category = () => {
  const navigate = useNavigate()
  return ( 
    <div className="bg-white">
      <h1 className="text-center lg:text-5xl sm:text-2xl pt-3">دسته بندی ها</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 px-5 mt-2">
        <div onClick={()=> navigate("/category/categoryitem/love")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <FaHeart className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">عاشقانه</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/drama")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <GiDramaMasks className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">دراما</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/child")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <FaChild className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">کودک</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/computer")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <FaComputer className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">کامپیوتر</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/business")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <MdBusinessCenter className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">کسب و کار</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/biography")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <IoPersonSharp className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">زندگی نامه</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/history")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <GiSpartanHelmet className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">تاریخ</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/art")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <GiArtilleryShell className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">هنر</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/science")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <GiMaterialsScience className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">علم و دانش</h1>
        </div>
        <div onClick={()=> navigate("/category/categoryitem/criminal")} className="p-3 lg:py-20 sm:py-10 border-4 border-green-500 flex flex-col items-center">
              <RiCriminalFill className="lg:text-8xl sm:text-4xl" />
              <h1 className="text-center mt-5 text-3xl">جنایی</h1>
        </div>
      </div>
    </div>
  ) 
}
export default Category