import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="w-full">
      {data.map((item) => (
        <div key={item.id} className="m-4 p-[20px] flex shadow-xl min-h-[300px] max-w-[500px] border-black border-solid border-2">
          <div className="rounded-md h-[260px] bg-gray-100 w-[220px]"> 
            <img src={item.image} alt={item.productName} className="w-full h-full object-cover rounded-md" />
          </div>
          <div className="flex-col p-3 ml-3 flex space-y-3 justify-between">
            <div>
              <h1 className="font-bold text-2xl mb-2">
                {item.productName}
              </h1>
              <p className="text-lg text-gray-500">
                {item.category}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg">
                숙박 15:00 ~
              </p>
              <div className="flex justify-end items-center">
                <h2 className="font-bold text-2xl mr-1">
                  {item.minPrice.toLocaleString()}원~
                </h2>
                <p className="font-bold text-lg">/박</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccommodationList;
