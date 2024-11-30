import React from 'react'
const Features = () => {
  const data = [{
    id:1,
    emoji: "⬇️",
    description:"امکان دانلود ۲۰ هزار کتاب رایگان"
  },{
    id:2,
    emoji: "🚀",
    description:"برگشت وجه در صورت عدم رضایت بعد از دانلود تا یک ماه"
  }]
  return (
    <div className="lg:flex lg:justify-center sm:grid sm:grid-cols-3">
    {data.map((item)=>{
      return(
        <div className="border-2 lg:p-8 sm:p-4 m-3 lg:w-[15%] sm:w-[80%] flex flex-col items-center rounded-2xl" key={item.id}>
          <p className="lg:text-8xl sm:text-[25px]">{item?.emoji}</p>
          <p className="lg:text-3xl sm:text-[12px]">{item?.description}</p>
        </div>
      )
    })}
      
    </div>
  )
}

export default Features