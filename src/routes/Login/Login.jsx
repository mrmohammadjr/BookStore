import React from 'react'
import {useNavigate} from "react-router-dom"
import { useForm } from 'react-hook-form';
import {useDispatch} from "react-redux";
import { login } from "../../redux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch()
  const notify = (title) => toast.info(title, {position: "top-center",autoClose: 3500,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light"})
  const onSubmit = async (data) => {
    dispatch(login(data,notify,navigate));
  };
  return (
    <div className="bg-green-500 p-5 pt-14 flex flex-col items-center w-full">
      <ToastContainer className="lalehF" />
      <h1 className="lg:text-right sm:text-center lg:text-8xl sm:text-4xl text-white my-8">ورود به کتابخونه</h1>
    <form className="flex flex-col w-full items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="lg:text-3xl sm:text-2xl "> ایمیل</label>
      <input className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" type="email" {...register('email', { required: true })} />
      {errors?.email && <div>ایمیل را وارد کنید</div>}

      <label className="lg:text-3xl sm:text-2xl">رمز عبور</label>
      <input type="password" className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" {...register('password', { required: true })} />
      {errors?.password && <div>رمز عبور خود را وارد کنید</div>}

      <button type="submit" className="bg-green-800 text-white border-4 text-3xl border-green-800 w-28 rounded-full transition duration-300 hover:bg-lime-500 hover:text-black">ورود</button>
    </form>
      <div className="border-t-4 border-white mt-5 lg:w-[25%] sm:w-[50%] flex flex-col items-center">
        <p className="lg:text-4xl sm:text-2xl my-3">عضو نیستی هنوز؟</p>
        <p onClick={()=> navigate("/signup")} className="lg:text-4xl sm:text-2xl my-3 text-red-300">عضو شو</p>
      </div>
    </div>
  )
}

export default Login