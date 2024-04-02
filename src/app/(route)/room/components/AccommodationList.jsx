/* eslint-disable @next/next/no-img-element */
'use client'
import Icons from "@/components/icons/icons";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const AccommodationList = ({ data }) => {
  const router = useRouter()

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starIcons = [];

    // fullStars 개수만큼 별 아이콘 추가
    for (let i = 0; i < fullStars; i++) {
      starIcons.push(<StarIcon key={`star-full-${i}`} />);
    }

    // hasHalfStar가 true이면 반 별 아이콘 추가
    if (hasHalfStar) {
      starIcons.push(<StarHalfIcon key="star-half" />);
    }

    // 남은 별 아이콘 추가 (채워져야 하는 별 아이콘)
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(<StarBorderIcon key={`star-empty-${i}`} />);
    }

    return starIcons;
  };

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
          onClick={() => router.push(`/room/${item?.id}`)}
        >
          <div className="m-6 cursor-pointer">

            <div className="rounded-md h-[200px] bg-gray-100 min-w-[170px] relative z-0">
              <Image
                src={item?.image}
                alt={item?.accommodationName}
                layout="fill"
                objectFit="fill"
                quality={100}
                loading="lazy"
                className="w-full h-full object-cover rounded-md shadow-inner"
              />
              {/* <img
                src={item?.image}
                alt={item?.accommodationName
                }
                className="w-full h-full object-cover rounded-md shadow-inner"
              /> */}
              <div className="rounded-b-lg absolute inset-x-0 bottom-0 h-8 bg-black bg-opacity-50 text-white p-1 pl-3 flex justify-start">
                <div className="flex text-sm items-center gap-1">
                  <Icons type="LocationOnOutlinedIcon" size="small" color="primary" additionalClass="text-base" />
                  <p className="font-semibold">{item?.area}</p>
                  <p className="ml-1">{item?.address}</p>
                </div>
              </div>
            </div>
            <div className="flex-col p-3 mt-1 flex space-y-3 justify-between w-full">
              {item?.accommodationName.length < 33 ? (
                <h1 className="font-bold text-xl mb-2">{item?.accommodationName}</h1>
              ) : item?.accommodationName.length < 50 ? (
                <h1 className="font-bold text-base mb-2">{item?.accommodationName}</h1>
              ) : (
                <h1 className="font-bold text-sm mb-2">{item?.accommodationName}</h1>
              )}

              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-500 " style={{ marginTop: '0' }}>{item?.category}</p>
                <div className="text-yellow-500">{renderRating(item?.rating)}</div>
              </div>


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
