const OrderItem = () => {
  
  return (
    <div className="p-4 w-full bg-white relative shadow-md mb-4">
      <div className="flex flex-col w-full p-5 divide-solid divide-y-[1px] divide-subtitle-gray rounded-lg">
        <div className="pb-6">
          <h3 className="block mb-4 font-bold text-3xl">
            {accommodation?.accommodationName}
          </h3>
          <div>
            <p className="text-gray-500">숙소 | {accommodation?.address}</p>
          </div>
        </div>
        <div className="pt-9 flex gap-6 flex-col">
          <h3 className="font-bold text-xl">{accommodation.room.roomName}</h3>
          <div className="flex flex-row h-20 items-start gap-4">
            <img
              alt="상품 상세이미지"
              src={accommodation?.image}
              className="h-full w-28 block rounded-md bg-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 divide-solid divide-x-[2px] divide-subtitle-gray font-semibold text-sm">
                <p>
                  {startDateFormatted} ~ {endDateFormatted}
                </p>
                <p className="pl-2">{diffDay}박</p>
              </div>
              <div className="flex flex-row gap-3 divide-solid divide-x-[2px] divide-subtitle-gray">
                <p className="text-gray-500">체크인 15:00 </p>
                <p className="pl-2 text-gray-500">체크아웃 15:00 </p>
              </div>
              <p className="text-gray-500">{accommodation.peoples}명</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div>
              <p className="inline">{diffDay > 1 ? "연박" : "숙박"} </p>
              <p className="inline font-bold text-lg">
                {accommodation.room.price.toLocaleString()}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem