import React, { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/utils/cn";
import Icons from "../icons/icons";

const AccommodationList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/accommodations");
      setData(result.data.content);
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "flex flex-col",
            index % 2 === 0 ? "border-r border-solid border-gray-300" : "",
            index < data.length - 2 && "border-b border-solid border-gray-300"
          )}
        >
          <div className="m-6 p-[20px] flex min-h-[230px] min-w-[450px] w-full lg:w-[45%]">
            <div className="rounded-md h-[200px] bg-gray-100 min-w-[170px] relative">
              <img
                src={item.image}
                alt={item.productName}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="rounded-b-lg absolute inset-x-0 bottom-0 h-8 bg-black bg-opacity-50 text-white p-1 pl-2 flex justify-start">
                <h2 className="font-bold text-sm">
                <Icons type="LocationOnOutlinedIcon" size="small" color="primary" additionalClass="text-base"/>
                {item.area}</h2>
                {/* <p>{item.address}</p> */}
              </div>
            </div>
            <div className="flex-col p-3 ml-3 flex space-y-3 justify-between w-full">
              <div>
                <h1 className="font-bold text-xl mb-2">{item.productName}</h1>
                <p className="text-lg text-gray-500">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-lg">숙박 15:00 ~</p>
                <div className="flex justify-end items-center">
                  <h2 className="font-bold text-2xl mr-1">
                    {item.minPrice.toLocaleString()}원~
                  </h2>
                  <p className="font-bold text-lg">/박</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccommodationList;
