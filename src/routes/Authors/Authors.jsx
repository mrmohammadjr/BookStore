import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import { authors } from "../../redux/action";
const Authors = () => {
  const [result, setResult] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  async function findAuthors(search){
    const res = await dispatch(authors(search))
    console.log(res.docs);
    setResult(res.docs);
  }
  return (
    <div className="bg-white">
      <h1 className="text-center lg:text-6xl sm:text-3xl p-1.5">نویسندگان</h1>
      <div className="flex flex-col items-center mt-5">
        <input type="text" className="lg:text-5xl sm:text-xl outline-none border-2 border-green-500 p-5 rounded-full" placeHolder="نویسنده مورد علاقه خود را پیدا کنید..." onChange={(e)=>{
              findAuthors(e.target.value)
          }}/>
      </div>
      <div className="w-full lg:grid lg:grid-cols-4 sm:flex sm:flex-col sm:items-center mt-4">
        {result?.slice(0, 10).map((item)=>{
          return(
            <div key={item?.key} onClick={()=> navigate(`/authors/${item.key}`)} className="flex justify-evenly items-center h-[10.5rem]">
              <h1 className="lg:text-5xl sm:text-2xl">{item?.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Authors