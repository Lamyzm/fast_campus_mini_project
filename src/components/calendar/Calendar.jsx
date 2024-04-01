import { generateDate, months } from "@/utils/dateutils";
import { calendarCn } from "@/utils/cn";
import dayjs from "dayjs";
import { useState, useRef } from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/buttons/Button";
import Icons from "../icons/icons";
import { useRouter } from "next/navigation";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import { useIsSearchedStore } from "@/store/useIsSearchStore";

const Calendar = () => {
  //검색완료 페이지에서 해당 컴포넌트가 불러지면 지역을 누를때 
  //isSearched에 따라 /main으로 보낼건지, 다시 /room 페이지로 가서 query를 보낼건지 결정
  const { isSearched } = useIsSearchedStore()

  // useSearchFilterStore에서 setDate를 가져옴
  const { setDate } = useSearchFilterStore()

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = dayjs();
  const [selectedDates, setSelectedDates] = useState([
    currentDate,
    currentDate.add(1, "month"),
  ]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const calendarRef = useRef(null);

  const router = useRouter();

  const handlePrevMonth = () => {
    setSelectedDates((prevDates) => [
      prevDates[0].subtract(1, "month"),
      prevDates[1].subtract(1, "month"),
    ]);
  };

  const handleNextMonth = () => {
    setSelectedDates((prevDates) => [
      prevDates[0].add(1, "month"),
      prevDates[1].add(1, "month"),
    ]);
  };

  const handleToday = () => {
    setSelectedDates([currentDate, currentDate.add(1, "month")]);
    if (calendarRef.current) {
      calendarRef.current.scrollLeft = 0;
    }
  };

  const handleDateClick = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isDateSelected = (date) => {
    if (startDate && endDate) {
      return date.isAfter(startDate) && date.isBefore(endDate);
    }
    return false;
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      //시작날짜, 종료날짜가 존재하면 날짜를 format하여 전역 searchStore date에 저장
      setDate({
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD")
      })
      if (isSearched) {
        router.replace("/room");
      }
      else {
        router.replace("/");
      }
    } else {
      console.log("Please select both start and end dates.");
    }
  };

  return (
    <div
      className="w-96 h-auto bg-white rounded-lg shadow-md p-4 m-5 overflow-x-auto border border-gray-200"
      ref={calendarRef}>
      <h1 className="flex justify-center mt-4 mb-7 text-2xl font-semibold text-gray-900">
        여행 날짜는 언제인가요?
      </h1>
      <div className="overflow-auto">
        {selectedDates.map((selectedDate, idx) => (
          <div key={idx} className="mb-5">
            <div className="flex justify-between mb-2">
              <h1>
                {selectedDate.year()}년 {months[selectedDate.month()]}
              </h1>
              {idx === 0 && (
                <div className="flex items-center gap-3">
                  <Icons
                    type="ArrowBackIosNewIcon"
                    size="large"
                    color="primary"
                    additionalClass="w-4 h-4 cursor-pointer text-gray-500 hover:text-black"
                    onClick={handlePrevMonth}
                  />
                  <h1
                    className="cursor-pointer text-gray-600 hover:text-black"
                    onClick={handleToday}>
                    Today
                  </h1>
                  <Icons
                    type="ArrowForwardIosIcon"
                    size="large"
                    color="primary"
                    additionalClass="w-4 h-4 cursor-pointer text-gray-500 hover:text-black"
                    onClick={handleNextMonth}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-7 font-semibold">
              {days.map((day, index) => (
                <h1
                  key={index}
                  className="h-14 grid place-content-center text-sm">
                  {day}
                </h1>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {generateDate(selectedDate.month(), selectedDate.year()).map(
                ({ date, currentMonth, today, visible }, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={cn(
                      "h-14 border-t grid place-content-center text-sm",
                      calendarCn(
                        visible ? "" : "invisible",
                        today && currentMonth ? "bg-gray-400 text-white" : "",
                        isDateSelected(date) ? "bg-gray-200 text-gray-600" : "",
                        startDate && date.isSame(startDate, "day")
                          ? "bg-red-300 text-white"
                          : "",
                        endDate && date.isSame(endDate, "day")
                          ? "bg-blue-300 text-white"
                          : ""
                      )
                    )}>
                    <h1
                      className={cn(
                        calendarCn(
                          !currentMonth ? "text-gray-400" : "",
                          "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                        )
                      )}>
                      {visible ? date.date() : ""}
                    </h1>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
        <div className="flex mx-3 justify-end">
          <Button
            size="sm"
            type="default"
            color="primary"
            additionalClass="w-20"
            onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
