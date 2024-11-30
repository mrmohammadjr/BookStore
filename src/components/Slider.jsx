import React from "react";
import Carousel from "react-multi-carousel";
import {useNavigate} from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, defult to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 360 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Slider = ({data,loading,error}) => {
  const navigate = useNavigate()
  return (
    <div className="p-5 z-10">
      {error?(
        <h1>error</h1>
        ):loading?(
          <div className="grid lg:grid-cols-4 sm:grid-cols-1">
            <div className="m-5 border-2 bg-white rounded-3xl p-5 flex flex-col items-center ">
              <div className="bg-gray-200 w-[50%] h-44"></div>
              <h1 className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</h1>
              <p className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</p>
            </div>
            <div className="m-5 border-2 bg-white rounded-3xl p-5 flex flex-col items-center ">
              <div className="bg-gray-200 w-[50%] h-44"></div>
              <h1 className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</h1>
              <p className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</p>
            </div>
            <div className="m-5 border-2 bg-white rounded-3xl p-5 flex flex-col items-center ">
              <div className="bg-gray-200 w-[50%] h-44"></div>
              <h1 className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</h1>
              <p className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</p>
            </div>
            <div className="m-5 border-2 bg-white rounded-3xl p-5 flex flex-col items-center ">
              <div className="bg-gray-200 w-[50%] h-44"></div>
              <h1 className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</h1>
              <p className="mt-3 bg-gray-200 text-gray-200">ggghhhhhyyyyyyyyyyuuu</p>
            </div>
          </div>
        ):(
        <Carousel
        responsive={responsive}
        rtl={true}
        autoPlay={true}
        autoPlaySpeed="5000"
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}>
        {data?.map((item, index) => {
          return (
            <div onClick={()=> navigate(`/category/${data[index]?.lending_edition}`,{state:data[index]?.key.slice(1)})} key={data[index]?.key} className="m-5 border-2 bg-white rounded-3xl p-5 flex flex-col items-center " key={index}>
              <img src={`https://covers.openlibrary.org/b/id/${data[index]?.cover_id}.jpg`} className="lg:h-9.6 sm:h-36" alt="movie" />
              <h1 className="text-center">{data[index]?.title}</h1>
              <h1>{data[index]?.first_publish_year}</h1>
              <h1 className="text-center">{data[index]?.authors[0]?.name}</h1>
            </div>
          );
        })}
      </Carousel>
        )}
    </div>
  );
};
export default Slider