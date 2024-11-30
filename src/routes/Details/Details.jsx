import React,{ useEffect,useState } from "react"
import {useSelector, useDispatch} from "react-redux";
import { useLocation } from "react-router-dom"
import { FaRegBookmark } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { bookId,authors,addToCart,savedItem } from "../../redux/action";
import Swal from 'sweetalert2'
const Details = () => {
  const {state} = useLocation()
  const [res,setRes] = useState([])
  const [authorName,setAuthorName] = useState("")
  const dispatch = useDispatch()
  const {checkLogin} = useSelector((state)=> state.getUser)
  async function getData(argument) {
    const data = await dispatch(bookId(state))
    setRes([data])
    const authordata = await dispatch(authors(res[0]?.authors[0]?.author?.key))
    setAuthorName(authordata.name)
  }
  let math = Math.floor(Math.random() * (999 - 150 + 1)) + 150;
  useEffect(()=>{
    getData()
  },[checkLogin]);
  return (
    <div className="flex flex-col items-center bg-green-500 pb-5">
              {res?.map((item)=>{
          return(
            <div className="lg:w-[80%] sm:w-full" key={item?.key}>
              <div className="sticky lg:grid mt-14 lg:grid-cols-2 sm:flex sm:flex-col">
                {item?.covers?(
                  <img className="lg:absolute sm:relative rounded-3xl shadow-2xl shadow-zinc-900 lg:h-[35rem] sm:h-[20rem] lg:mr-[10%] sm:mr-[22%] lg:w-auto sm:w-[55%]" src={`https://covers.openlibrary.org/b/id/${item?.covers[0]}.jpg`} alt="bookImage" />
                ):("")}
                <div className="flex flex-col items-center lg:gap-32 sm:gap-12 sticky w-full lg:mr-[100%] sm:mr-0">
                  <h1 className="lg:text-7xl sm:text-4xl text-white mt-10">{item?.title}</h1>
                  <h1 className="lg:text-6xl text-white">نویسنده : {authorName === "TypeError"?"??":authorName}</h1>
                  <h1 className=" text-center lg:text-6xl text-white">اتتشار اولیه : {item?.first_publish_date?item?.first_publish_date:"?"}</h1>
                </div>
              </div>
              <div className="bg-gray-200 w-[100%] lg:pt-28 sm:pt-14 p-5 mt-1">
                <div>
                  <div className="eleDirL flex lg:gap-16 lg:ml-[10rem] sm:ml-0 sm:gap-0 sm:justify-around">
                    <FaRegBookmark onClick={()=> {checkLogin?dispatch(savedItem(item?.key,item?.covers[0],item?.title)):Swal.fire("ابتدا وارد حساب کاربری خود شوید"); }} className=" text-gray-500 lg:text-6xl sm:text-2xl"/>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="lg:grid lg:grid-cols-2 mt-10 sm:flex sm:flex-col">
                    <div className="w-[100%]">
                      <h3 className="lg:text-5xl sm:text-2xl mb-5 overflow-hidden">توضیحات</h3>
                      <p className="lg:text-3xl sm:text-[10px] lg:p-0">{item?.description?.value?item?.description?.value:item?.description?item?.description:"توضیحی برای این کتاب وجود ندارد"}</p>
                    </div>
                    <div className="mr-10">
                      <p className="lg:text-5xl sm:text-2xl">قیمت:{math}تومان</p>
                      <p className="lg:text-5xl sm:text-2xl my-20">تعداد صفحه:{item?.revision}</p>
                      {item.subjects?(
                        <p className="lg:text-5xl sm:text-2xl my-20">دسته بندی :{item?.subjects[4]}</p>
                      ):("")}
                    </div>
                  </div>
                  <button onClick={()=> {checkLogin?dispatch(addToCart(item?.key,math,item?.title,item?.covers[0])) : Swal.fire("ابتدا وارد حساب کاربری خود شوید");}} className="mt-4 bg-green-800 text-white p-3 lg:w-[50%] sm:w-auto rounded-3xl flex justify-center gap-5 lg:text-5xl sm:text-2xl transition duration-300 hover:bg-lime-500 hover:text-black">افزودن به سبد خرید<MdAddShoppingCart /></button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default Details