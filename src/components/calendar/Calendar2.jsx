import { generateDate, months } from "@/utils/calendar";
import { calendarCn } from "@/utils/cn";
import dayjs from "dayjs";
import { useState } from "react";
import Icons from "../icons/icons";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const NewCalendar = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handlePrevMonth = () => {
    setSelectedDate(selectedDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.add(1, "month"));
  };

  // Generate two sets of dates: selected month and next month
  const selectedMonthDates = generateDate(selectedDate.month(), selectedDate.year());
  const nextMonthDates = generateDate(selectedDate.add(1, "month").month(), selectedDate.add(1, "month").year());

  return (
    <div className="w-96 h-auto bg-white rounded-lg shadow-md p-4 m-5 overflow-y-auto border border-gray-200">
      <div className="flex justify-between mb-2">
        <h1>{selectedDate.year()}년 {months[selectedDate.month()]}</h1>
        <div className="flex items-center gap-3">
          <ArrowBackIos
            className="w-4 h-4 cursor-pointer text-gray-500 hover:text-black"
            onClick={handlePrevMonth}
          />
          <h1
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={() => {
              setSelectedDate(currentDate);
            }}
          >
            Today
          </h1>
          <ArrowForwardIos
            className="w-4 h-4 cursor-pointer text-gray-500 hover:text-black"
            onClick={handleNextMonth}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 font-semibold">
        {days.map((day, index) => (
          <h1 key={index} className="h-14 grid place-content-center text-sm">
            {day}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {/* Render selected month's dates */}
        {selectedMonthDates.map(({ date, currentMonth, today }, index) => (
          <div
            key={index}
            className={`h-14 border-t grid place-content-center text-sm ${
              today && currentMonth ? "bg-red-500 text-white" : ""
            }`}
          >
            <h1
              className={calendarCn(
                !currentMonth ? "text-gray-400" : "",
                "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
              )}
            >
              {date.date()}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h1>{selectedDate.add(1, "month").year()}년 {months[selectedDate.add(1, "month").month()]}</h1>
        <div className="grid grid-cols-7 mt-5">
          {/* Render next month's dates */}
          {nextMonthDates.map(({ date, currentMonth, today }, index) => (
            <div
              key={index}
              className={`h-14 border-t grid place-content-center text-sm ${
                today && currentMonth ? "bg-red-500 text-white" : ""
              }`}
            >
              <h1
                className={calendarCn(
                  !currentMonth ? "text-gray-400" : "",
                  "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                )}
              >
                {date.date()}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCalendar;
