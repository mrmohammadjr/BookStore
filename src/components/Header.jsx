import React,{ useState,useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../Logo(1).png"
import Swal from 'sweetalert2'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {useSelector, useDispatch} from "react-redux";
import SideBar from "../components/SideBar"
import {useNavigate} from "react-router-dom"
import { autoLogin,logOut } from "../redux/action"
export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {checkLogin,details} = useSelector((state)=> state.getUser)
  useEffect(()=>{
    dispatch(autoLogin(load,Swal))
  },[])
  let load = JSON.parse(localStorage.getItem("user"));
  const {data} = useSelector((state)=> state.cartItems)
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className=" lg:flex justify-between rtl w-[100%] sm:hidden">
      <ul className="flex justify-start pr-10 gap-[10%] w-[100%] text-4xl mt-3">
        <li className="text-white" onClick={()=> navigate("/")}>کتابخونه</li>
        <li className="" onClick={()=> navigate("/authors")}>نویسندگان</li>
        <ul>
          <li className="flex" onClick={() => setDropDown(c => !c)}>دسته بندی ها</li>
          {dropDown?(
            <ul className="flex w-[10%] items-center flex-col z-50 absolute">
              <li className="bg-white p-3 w-full text-center rounded-t-2xl">عاشقانه</li>
              <li className="bg-white p-3 w-full text-center">علمی</li>
              <li className="bg-white p-3 w-full text-center">جنابی</li>
              <li className="bg-white p-3 w-full text-center">ثروت</li>
              <li className="bg-white p-3 w-full text-center">کارآگاهی</li>
              <li className="bg-white p-3 w-full text-center rounded-b-2xl" onClick={()=>{
                navigate("/category")
                setDropDown(c => !c)
              }}>بیشتر ...</li>
            </ul>
            ):("")}
        </ul>
        <li className="" onClick={()=>{navigate("/callus")}}>تماس با ما</li>
      </ul>
      <ul className="flex justify-center gap-[20%] w-[50%] z-20 text-4xl mt-3">
        {checkLogin? (
            <li><Menu as="div" className="relative inline-block text-left eleDirL">
              <div>
                <MenuButton className="flex justify-center items-center -mt-3 w-full justify-end py-4 sm:text-sm text-black lg:text-[40px] shadow-sm border-b-4 border-black">{details[0]?.email}</MenuButton>
        <MenuItems transition className="absolute right-0 z-10 mt-0.5 left-0.5 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition w-96 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1">
          <MenuItem>
            <p onClick={()=>{navigate("/profile")}} className="block px-4 py-2 lg:text-5xl sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              حساب کاربری
            </p>
          </MenuItem>
          <MenuItem>
            <p onClick={()=>{navigate("/cart")}} className="block px-4 py-2 eleDir lg:text-5xl sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 w-[100%] flex justify-between"
            >
              <span className="bg-red-500 rounded lg:text-5xl sm:text-sm text-white px-1.5">{data?.length}</span>
              سبد خرید
            </p>
          </MenuItem>
          <MenuItem>
            <p
              onClick={()=>{dispatch(logOut())}}
              className="block px-4 py-2 lg:text-5xl sm:text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              خروج
            </p>
          </MenuItem>
      </div>
          </MenuItems>
      </div>
            </Menu></li>
            ) : (
            <>
        <li onClick={()=> navigate("/signup")} className="bg-green-500 p-3 rounded-3xl text-white">ثبت نام</li>
        <li onClick={()=> navigate("/login")} className="p-3">ورود</li>
        </>
            )}
      </ul>
    </div>
  )
}
export const HeaderRes = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let load = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    dispatch(autoLogin(load,Swal))
  },[])
  const {checkLogin} = useSelector((state)=> state.getUser)
  const {data} = useSelector((state)=> state.cartItems)
  return (
    <div className="bg-green-500 lg:hidden sm:flex justify-between items-center w-full">
      <SideBar />
        <img alt="headerlogo" src={Logo} onClick={()=> navigate("/")} className="w-1/6 "/>
      <div className="ml-3">
        {checkLogin? (
            <Menu as="div" className="relative inline-block text-left eleDirL">
              <div>
                <MenuButton className="inline-flex w-full justify-end py-2 text-sm font-semibold text-white shadow-sm"><FaRegUserCircle className="text-3xl text-white" aria-hidden="true" />
        </MenuButton>
        <MenuItems transition className="absolute right-0 z-10 mt-0.5 left-0.5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1">
          <MenuItem>
            <p onClick={()=>{navigate("/profile")}} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              حساب کاربری
            </p>
          </MenuItem>
          <MenuItem>
            <p onClick={()=>{navigate("/cart")}} className="block px-4 py-2 eleDir text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 w-[100%] flex justify-between"
            >
              <span className="bg-red-500 rounded text-white px-1.5">{data?.length}</span>
              سبد خرید
            </p>
          </MenuItem>
          <MenuItem>
            <p
              onClick={()=>{dispatch(logOut())}}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              خروج
            </p>
          </MenuItem>
      </div>
          </MenuItems>
      </div>
            </Menu>
            ) : (
          <p className="text-white" onClick={()=> navigate("/login")} >ورود</p>
            )}
      </div>
    </div>
  )
}