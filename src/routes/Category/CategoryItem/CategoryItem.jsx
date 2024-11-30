import React,{useEffect,useState} from 'react'
import { useNavigate,useParams } from "react-router-dom"
import {useDispatch} from "react-redux";
import { categoryItem } from "../../../redux/action";
const CategoryItem = () => {
  const [data,setData] = useState([])
  const {item} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function getData(argument) {
    const {works} = await dispatch(categoryItem(item))
    setData(works)
    console.log(works,data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="bg-white flex flex-col items-center">
      <h1 className="text-5xl mt-3">فهرست کتاب های </h1>
      <div className="grid grid-cols-4 w-full my-10">
      {data?.map((item,index)=>{
        return(
          <div onClick={()=> navigate(`/category/${item?.lending_edition}`,{state:item?.key})} className="flex flex-col items-center my-5 border-2 rounded-2xl border-green-500 mx-32 pt-5">
            <h1 className="my-2.5">{item?.title}</h1>
          </div>
        )
      })}
      </div>
      <h1 onClick={()=> navigate("/category")} className="bg-green-500 text-white rounded-xl text-center w-auto p-5 text-4xl">دسته بندی ها</h1>
    </div>
  )
}

export default CategoryItem