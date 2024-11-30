import React from 'react' 
import Logo from "../../Logo(1).png"
const NotFound = () => {
  return ( 
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-[15rem]">404</h1>
      <img src={Logo} alt={"logoimg"} className="my-6 lg:w-[15%] sm:w-[25%] lg:py-10 sm:py-2.5 bg-green-300 rounded-full"/>
      <h1 className="text-[5rem] mt-20">اینجا دنبال چیزی میگردی؟</h1>
    </div>
  ) 
} 
export default NotFound