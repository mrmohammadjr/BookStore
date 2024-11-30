import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { FaRegTrashCan } from "react-icons/fa6";
import {useSelector, useDispatch} from "react-redux";
import { pay,deleteItem } from "../../redux/action";
import Swal from 'sweetalert2'
const Cart = () => {
  const navigate = useNavigate()
  const [sum, setSum] = useState(0);
  const [cartStatus, setCartStatus] = useState(false);
  const {data} = useSelector((state)=> state.cartItems)
  const dispatch = useDispatch()
  const {checkLogin} = useSelector((state)=> state.getUser)
  useEffect(()=>{
    if (checkLogin === false) {
      navigate("/")
    }
  },[])
  function payfunc(){
    if (data?.length < 1) {
      Swal.fire("خالی")
    } else {
    setCartStatus(true)
    setTimeout(function() {
      dispatch(pay(data))
      setCartStatus(false)
    }, 2000);
    }
  }
  useEffect(() => {
    const initSum = data.reduce((acc, item) => acc + item.price, 0);
    setSum(initSum);
  }, [data]);
  return (
    <div className="bg-white lg:p-10 sm:p-1 lg:w-auto sm:w-full">
      <div>
        <div className="bg-green-500 lg:w-[95%] sm:w-full lg:mt-5 lg:mx-5 lg:p-5 sm:p-2 sm:mt-0 sm:mx-0 flex justify-around">
          <p className="lg:text-4xl sm:text-xl text-green-500">ردیف</p>
          <p className="lg:text-4xl sm:text-xl text-white">نام کتاب</p>
          <p className="lg:text-4xl sm:text-xl text-white">قیمت</p>
          <p className="lg:text-4xl sm:text-xl text-white">عکس</p>
        </div>
        {data?.map((item,index)=>{
          return(
            <div key={item?.id} className="lg:w-[95%] sm:w-full grid grid-cols-4 items-center lg:mx-5 sm:mx-0">
              <FaRegTrashCan onClick={()=> dispatch(deleteItem(index))} className="lg:text-4xl sm:text-xl sm:mr-[40%] lg:mr-[30%] lg:border-2 sm:border-none lg:border-green-500 text-black" />
              <p className="lg:text-4xl sm:text-sm lg:border-2 sm:border-none border-green-500 p-5">{item?.title}</p>
              <p className="lg:text-4xl sm:text-sm lg:border-2 sm:border-none border-green-500 sm:mr-[40%] lg:mr-[40%]">{item?.price}</p>
              <img src={`https://covers.openlibrary.org/b/id/${item?.cover}.jpg`} className="lg:h-[15rem] sm:h-16 sm:mr-7 lg:my-5 lg:mr-[30%]" alt="movie" />
            </div>
          )
        })}
      </div>
      <div className="lg:flex lg:justify-between p-10 w-[95%] sm:grid sm:grid-cols-1 sm:items-center">
        <div className="sm:flex sm:justify-center">
          <p className="lg:text-5xl sm:text-2xl mb-2.5">مجموع:</p>
          <p className="lg:text-5xl sm:text-2xl">{sum} تومان</p>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center sm:gap-3">
          <button className="bg-red-500 p-5 rounded-3xl text-white lg:text-5xl sm:text-2xl ml-3" onClick={()=> navigate("/")}>بازگشت به صفحه اصلی</button>
          <button className="bg-green-500 p-5 rounded-3xl text-white lg:text-5xl sm:text-2xl" onClick={()=> payfunc()}>{cartStatus === true? <div class="loader"></div> : "پرداخت نهایی"}</button>
        </div>
      </div>
    </div>
  )
}

export default Cart