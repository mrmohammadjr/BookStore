import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchBox } from "../redux/action";

const Searchbox = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function getData() {
    const response = await dispatch(SearchBox(search));
    if (response && response.docs) {
      setData(response.docs);
    } else {
      setData([]);
    }
    console.log("search", response.docs);
  }

  useEffect(() => {
    if (search.length > 0) {
      getData();
    } else {
      setData([]); // Clear data when search is empty
    }
  }, [search]);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-[90%] bg-white p-5 m-5 flex justify-evenly">
        <input
          type="text"
          className="bg-transparent w-full outline-none lg:text-3xl sm:text-xl"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی کتاب: ارباب حلقه ها"
        />
      </div>
      {search.length < 1 ? (
        ""
      ) : (
        <>
          <div className="bg-green-100 lg:w-[75%] sm:w-[90%] p-1 absolute z-10 lg:mt-[130px] sm:mt-[120px]">
            {data.slice(0, 10).map((item) => (
              <div key={item.key} className="w-full border-b-2 border-gray-400 flex py-2 pl-1 justify-between items-center">
                <h1
                  onClick={() => navigate(`/category/${item.edition_key[0]}`, { state: item.key.slice(1) })}
                >
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Searchbox;