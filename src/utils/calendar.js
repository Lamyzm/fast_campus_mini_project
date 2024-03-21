import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDateOfMonth = dayjs().year(year).month(month).date(1);
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // Calculate the offset to adjust for the starting day of the week
  const offset = firstDateOfMonth.day();

  // Add the prefix dates (dates from the previous month)
  for (let i = 0; i < offset; i++) {
    const date = firstDateOfMonth.subtract(offset - i, "day");
    arrayOfDate.push({
      visible: false,
      date,
    });
  }

  // Generate current dates for the month
  for (let i = 1; i <= lastDateOfMonth.date(); i++) {
    const date = firstDateOfMonth.date(i);
    arrayOfDate.push({
      visible: true,
      currentMonth: true,
      date,
      today: date.isSame(dayjs(), "day"),
    });
  }

  return arrayOfDate;
};



export const months = [
	"1월",
	"2월",
	"3월",
	"4월",
	"5월",
	"6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];