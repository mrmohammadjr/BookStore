import React,{ useState } from "react";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Logo from "../Logo(1).png"
import { FaRegWindowClose } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
          <TbLayoutSidebarLeftCollapseFilled className="text-3xl text-white" onClick={() => setShowSidebar(true)} />
        <div onMouseOut={() => setShowSidebar(false)} className={`top-0 sh right-0 w-[65%] bg-green-500  p-5 pl-10 text-white fixed h-full z-20 ease-in-out duration-300 ${
          showSidebar ? "shadows translate-x-0 " : "translate-x-full"}`}>
              <div className="flex justify-around items-center">
                <FaRegWindowClose className="-mt-2.5 mr-1.5 text-2xl text-white items-center cursor-pointer" onClick={() => setShowSidebar(false)} />
                <img src={Logo} className="w-[50%]" alt={"sideBarIcon"} />
              </div>
              <h1 className="text-center mt-1.5 border-b-2">کتابخونه ، فروشگاه کتاب</h1>
              <ul className="border-t-8 border-white mt-3 rounded-r-2xl border-r-8 border-b-8">
                <li className="my-0.5 pr-3 bg-white text-green-500" onClick={()=> navigate("/authors")}>نویسندگان</li>
                <li className="my-0.5 pr-3 bg-white text-green-500" onClick={()=> {
                  navigate("/callus")
                  setShowSidebar(false)
                }}>تماس با ما</li>
                <li className="my-0.5 pr-3 bg-white text-green-500" onClick={()=> {
                  navigate("/category")
                  setShowSidebar(false)
                }}>دسته بندی ها</li>
              </ul>
      </div>
    </div>
  )
}

export default SideBar