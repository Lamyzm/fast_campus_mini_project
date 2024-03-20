import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import dayGridPlugin from "@fullcalendar/daygrid";
import { cva } from "class-variance-authority";
import koLocale from "@fullcalendar/core/locales/ko";

const Calendar = () => {
  const dayCellContent = ({ date }) => {
    const dayNumber = date.getDate(); // Get the day number

    return (
      <div className="text-sm h-11">{dayNumber}</div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-5 w-96 h-96 overflow-y-auto border border-gray-200">
      <FullCalendar
        plugins={[dayGridPlugin, multiMonthPlugin]}
        headerToolbar={false}
        initialView="multiMonth"
        multiMonthMaxColumns={1}
        views={{
          multiMonth: {
            type: "dayGridMonth",
            duration: { months: 12 },
            fixedWeekCount: false,
          },
        }}
        height="auto"
        eventDisplay="block"
        scrollTime="00:00" 
        events={[]}
        dayCellContent={dayCellContent}
        nowIndicator={true}
        locales={[koLocale]} 
      />
    </div>
  );
};

export default Calendar;
