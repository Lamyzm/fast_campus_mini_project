'use client'
import Icons from "@/components/icons/icons";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";


const AccommodationList = ({ data }) => {
  const router = useRouter()

  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      {data.map((item, index) => (
        <div
          key={item?.id}
          className={cn(
            "flex flex-col",
            index % 2 === 0 ? "border-r border-solid border-gray-300" : "",
            index < data.length - 2 && "border-b border-solid border-gray-300"
          )
          }
          onClick={() => router.push(`/testdetail/${item?.id}`)}
        >
          <div className="m-6 cursor-pointer">
            <div className="rounded-md h-[200px] bg-gray-100 min-w-[170px] relative z-0">
              <img
                src={item?.image}
                alt={item?.accommodationName
                }
                className="w-full h-full object-cover rounded-md shadow-inner"
              />
              <div className="rounded-b-lg absolute inset-x-0 bottom-0 h-8 bg-black bg-opacity-50 text-white p-1 pl-3 flex justify-start">
                <div className="flex text-sm items-center gap-1">
                  <Icons type="LocationOnOutlinedIcon" size="small" color="primary" additionalClass="text-base" />
                  <p className="font-semibold">{item?.area}</p>
                  <p className="ml-1">{item?.address}</p>
                </div>
              </div>
            </div>
            <div className="flex-col p-3 mt-1 flex space-y-3 justify-between w-full">
              <h1 className="font-bold text-xl mb-2">{item?.accommodationName
              }</h1>
              <p className="text-lg text-gray-500 " style={{marginTop:'0'}}>{item?.category}</p>
              <div className="text-right">
                <p className="text-lg">숙박 15:00 ~</p>
                <div className="flex justify-between items-center">
                  <div className=" flex justify-center items-center text-base text-gray-500"><Icons type="PermIdentityOutlinedIcon" size="large" color="primary" />
                    <p className="mt-[2px]">최대 인원 {item?.maximumPeople}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="font-bold text-2xl mr-1">
                      {item?.minPrice?.toLocaleString()}원~
                    </h2>
                    <p className="font-bold text-lg">/박</p>
                  </div>
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
