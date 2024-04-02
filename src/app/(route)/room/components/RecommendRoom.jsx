'use client'
import Icons from "@/components/icons/icons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RatingStar from "./RatingStar";

const RecommendRoom = ({ data: item }) => {
    const router = useRouter();

    return (
        <div className="bg-gray-50 w-full lg:grid lg:grid-cols-1 gap-4" onClick={() => router.push(`/room/${item?.id}`)}>
            <div className="relative">
                <div
                    key={item?.id}
                    className={cn(
                        "flex-col",
                        "w-full",
                        "bg-white",
                        "rounded-md",
                        "overflow-hidden",
                        "border",
                        "border-gray-200",
                        "hover:border-gray-400",
                        "transition"
                    )}
                >
                    <div className="my-6 cursor-pointer flex shadow">
                        <div className="w-[150px] h-[150px] mr-3">
                            {/* <img
                                src={item?.image}
                                alt={item?.accommodationName}
                                className="w-full h-full object-cover rounded-md shadow-inner"
                            /> */}
                            <Image
                                src={item?.image}
                                alt={item?.accommodationName}
                                width={150}
                                height={150}
                                className="w-full h-full object-cover rounded-md shadow-inner"
                            />
                        </div>
                        <div className="flex-col flex-grow">
                            <div className="rounded-md relative">
                                <div className="rounded-b-lg h-6 bg-blue-100 text-gray-700 font-bold p-1 pl-3 flex justify-start">
                                    <div className="flex text-sm items-center gap-1">
                                        <Icons type="LocationOnOutlinedIcon" size="small" color="primary" additionalClass="text-base" />
                                        <p className="font-semibold">{item?.area}</p>
                                        <p className="ml-1">{item?.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="flex justify-between items-center ">
                                    <h1 className="font-bold text-lg mb-1">{item?.accommodationName}</h1>
                                    <RatingStar rating={item?.rating} />
                                </div>

                                <p className="text-base text-gray-500">{item?.category}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Icons type="PermIdentityOutlinedIcon" size="small" color="primary" />
                                        <p className="ml-1">최대 인원 {item?.maximumPeople}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h2 className="font-bold text-lg mr-1">
                                            {item?.minPrice?.toLocaleString()}원~
                                        </h2>
                                        <p className="font-bold text-base">/박</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendRoom;