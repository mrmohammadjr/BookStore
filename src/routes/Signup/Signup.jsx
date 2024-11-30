import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import { signUp } from "../../redux/action";
import { v4 as uuidv4 } from 'uuid';
const Signup = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const {flag} = useSelector((state)=> state.addUser)
  console.log(flag);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const id = uuidv4()
    dispatch(signUp(data,id))
    console.log(data)
  };

  const password = watch('password');
  return (
        <div className="bg-green-500 p-5 pt-14 flex flex-col items-center w-full">
      <h1 className="lg:text-right sm:text-center lg:text-8xl sm:text-4xl text-white my-8">ثبت نام در کتابخونه</h1>
    <form className="flex flex-col w-full items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
      <label className="lg:text-3xl sm:text-2xl ">نام کاربری</label>
      <input className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" type="text" {...register('username', { required: true })} />
      {errors?.username && <div>نام کاربری را وارد کنید</div>}

      <label className="lg:text-3xl sm:text-2xl ">ایمیل</label>
      <input className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" type="email" {...register('email', { required: true })} />
      {errors?.email && <div>ایمیل را وارد کنید</div>}

      <label className="lg:text-3xl sm:text-2xl ">رمز عبور</label>
      <input className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" type="password" {...register('password', { required: true, minLength: 8 })} />
      {errors?.password && <div>رمز عبور باید ۸ کاراکتر داشته باشد</div>}

      <label className="lg:text-3xl sm:text-2xl ">تایید رمز عبور</label>
      <input className="outline-none border-none p-3 lg:w-[25%] sm:w-[75%] rounded-3xl" type="password" {...register('confirmPassword', { required: true, validate: (value) => value === password })} />
      {errors?.confirmPassword && <div>رمز عبور مطابقت ندارد</div>}

      <button type="submit" className="bg-green-800 text-white border-4 text-3xl border-green-800 w-28 rounded-full transition duration-300 hover:bg-lime-500 hover:text-black">ثبت نام</button>
    </form>
          <div className="border-t-4 border-white mt-5 lg:w-[25%] sm:w-[50%] flex flex-col items-center">
        <p className="lg:text-4xl sm:text-2xl my-3">عضو هستی ؟</p>
        <p onClick={()=> navigate("/login")} className="lg:text-4xl sm:text-2xl my-3 text-red-300">وارد شو</p>
      </div>
  </div>
  );
};

export default Signup;