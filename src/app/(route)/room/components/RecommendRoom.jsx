'use client'
import Icons from "@/components/icons/icons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RecommendRoom = ({ data: item }) => {
    const router = useRouter();

    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const starIcons = [];

        // fullStars 개수만큼 별 아이콘 추가
        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<StarIcon className="text-base" key={`star-full-${i}`} />);
        }

        // hasHalfStar가 true이면 반 별 아이콘 추가
        if (hasHalfStar) {
            starIcons.push(<StarHalfIcon className="text-base" key="star-half" />);
        }

        // 남은 별 아이콘 추가 (채워져야 하는 별 아이콘)
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starIcons.push(<StarBorderIcon className="text-base" key={`star-empty-${i}`} />);
        }

        return starIcons;
    };

    return (
        <div className="bg-gray-50 w-full lg:grid lg:grid-cols-1 gap-4" onClick={() => router.push(`/testdetail/${item?.id}`)}>
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
                                    <div className="text-yellow-500 text-sm">{renderRating(item?.rating)}</div>
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