import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
import { LuUserSquare2 } from "react-icons/lu";
const Profile = () => {
  const navigate = useNavigate()
  const {checkLogin,details} = useSelector((state)=> state.getUser)
  console.log(details[0]?.books[0])
  useEffect(()=>{
    if (checkLogin === false) {
      navigate("/")
    }
  },[])
  return (
    <div className="bg-white">
      <div className="flex justify-around p-10 items-center">
        <LuUserSquare2 className="lg:text-[200px] sm:text-[100px]" />
        <div>
          <h1 className="lg:text-6xl sm:text-3xl">{details[0]?.username}</h1>
          <h1 className="lg:text-6xl sm:text-3xl">{details[0]?.email}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center my-14 gap-14">
        <div>
          <h1 className="lg:text-6xl sm:text-3xl">کتاب های خریداری شده</h1>
          <div className="lg:grid lg:grid-cols-4 sm:grid-cols-2 w-full items-center">
          {details[0]?.books?.map((item)=>{
            return(
                <div key={item?.id} className="flex flex-col items-center gap-5 mx-10">
                  <img className="lg:h-[14rem] sm:h-[9rem] lg:mr-[10%] sm:mr-[22%] lg:w-auto sm:w-[45%]" src={`https://covers.openlibrary.org/b/id/${item?.cover}.jpg`} alt="bookImage" />
                  <p className="lg:text-4xl sm:text-2xl">{item?.title}</p>
                </div>
            )
          })}
          </div>
        </div>
        <div>
          <h1 className="lg:text-6xl text-center sm:text-3xl">کتاب های منتخب</h1>
          <div className="lg:grid lg:grid-cols-4 sm:grid-cols-2 w-full items-center">
          {details[0]?.favorites?.map((item)=>{
            return(
                <div key={item?.id} className="flex flex-col items-center gap-5 mx-10">
                  <img className="lg:h-[14rem] sm:h-[9rem] lg:mr-[10%] sm:mr-[22%] lg:w-auto sm:w-[45%]" src={`https://covers.openlibrary.org/b/id/${item?.cover}.jpg`} alt="bookImage" />
                  <p className="lg:text-4xl sm:text-2xl">{item?.title}</p>
                </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile