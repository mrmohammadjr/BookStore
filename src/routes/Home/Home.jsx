import React,{useEffect} from 'react'
import BookWall from "../../BookWall.jpg"
import Logo from "../../Logo(1).png"
import Features from "../../components/Features"
import Slider from "../../components/Slider"
import Searchbox from "../../components/Searchbox"
import {useSelector, useDispatch} from "react-redux";
import { getData } from "../../redux/action";
const Home = () => {
  const {data,loading,error} = useSelector((state)=> state.allData)
  const dispatch = useDispatch()
  console.log(data);
  useEffect(()=>{
    dispatch(getData())
  },[]);
  
  return (
  <div>
    <div className="lg:flex justify-between sm:hidden">
      <div className="flex justify-between bg-green-200 right-28 mt-[4.2%] sticky h-fit w-[65%]">
        <div className="w-[75%] flex flex-col gap-6">
          <h1 className="text-7xl p-3">کتابخونه ، جایی برای بهترین ها</h1>
          <p className="text-8xl p-4">کتابخانه ای کامل در اختیار شما</p>
          <Searchbox />
        </div>
        <div className="w-[25%] h-[40rem]">
          <img src={Logo} alt="BookWall" className="h-auto pt-40 w-full"/>
        </div>
      </div>
      <div className="w-[35%]">
        <img src={BookWall} alt="BookWall" className="-mt-[77px]"/>
      </div>
    </div>
    <div className="lg:hidden sm:flex flex-col items-center bg-green-500 rounded-b-3xl">
      <h1 className="text-4xl my-3">به کتابخونه خوش آمدید</h1>
      <h2 className="text-2xl my-3 text-white">اینجا دنبال چه کتابی می گردی؟</h2>
    <Searchbox />
    </div>
    <div className="bg-white">
      <Features />
    </div>
    <div className="sticky">
      <h1 className="lg:text-white sm:text-green-500 lg:text-4xl sm:text-2xl mr-5 mt-2">عشق در میان صفحات</h1>
      <Slider error={error} loading={loading} data={data[0]}/>
    </div>
    <div className="sticky">
      <h1 className="lg:text-white sm:text-green-500 lg:text-4xl sm:text-2xl mr-5 mt-2">شگفتی‌ها در بین صفحه‌ها</h1>
      <Slider error={error} loading={loading} data={data[1]}/>
    </div>
    <div className="sticky">
      <h1 className="lg:text-white sm:text-green-500 lg:text-4xl sm:text-2xl mr-5 mt-2">راز های پنهان</h1>
      <Slider error={error} loading={loading} data={data[2]}/>
    </div>
    <div className="sticky">
      <h1 className="lg:text-white sm:text-green-500 lg:text-4xl sm:text-2xl mr-5 mt-2">راز های موفقیت</h1>
      <Slider error={error} loading={loading} data={data[3]}/>
    </div>
  </div>
  )
}

export default Home