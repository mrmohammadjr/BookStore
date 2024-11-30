import React,{useEffect,useState} from 'react'
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom"
import { authorDetails } from "../../../redux/action";
const AuthorDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  async function getData(argument) {
    const works = await dispatch(authorDetails(id))
    setData([works])
    console.log(works)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="bg-white py-4 flex justify-center">
      <div className="border-t-4 border-b-4 mt-5 border-green-500 w-[90%]">
        {data?.map((item)=>{
          return(
            <div key={item?.key} className="w-full flex flex-col items-center">
              <div className="lg:flex lg:justify-around py-5 lg:items-center sm:flex sm:flex-col sm:items-center w-full">
                <img className="rounded-full lg:h-[20rem] lg:w-[17%] sm:h-[12rem] sm:w-[50%]" src={`https://covers.openlibrary.org/b/id/${item?.photos[0]}.jpg`} alt={"authorCover"} />
                  <div className="flex flex-col items-center gap-10">
                    <h1 className="lg:text-5xl sm:text-2xl">{item?.name}</h1>
                    <h1 className="lg:text-5xl sm:text-2xl">نام کامل : {item?.fuller_name}</h1>
                    <h1 className="lg:text-5xl sm:text-2xl"> تاریخ تولد : {item?.birth_date}</h1>
                  </div>
              </div>
                <div>
                  <h1 className="lg:text-5xl sm:text-2xl eleDirL">{item?.bio}</h1>
                </div>
                <div className="flex justify-around w-full my-11">
                  <a className="decoration-0 text-green-500 lg:text-5xl sm:text-2xl" href={item?.links[0]?.url}>سایت رسمی</a>
                  <a className="decoration-0 text-green-500 lg:text-5xl sm:text-2xl" href={item?.wikipedia}>ویکی پدیا</a>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AuthorDetails