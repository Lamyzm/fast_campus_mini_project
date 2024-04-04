import dayjs from "dayjs";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Link from "next/link";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { blue } from '@mui/material/colors';
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const { Button } = require("../buttons/Button");

const SearchButtons = () => {
  const { area, people, date, clearAll } = useSearchFilterStore()

  // 날짜 계산
  let startDate = date.startDate;
  let endDate = date.endDate;

  // startDate와 endDate가 dayjs 객체가 아닌 문자열일 경우 dayjs로 변환
  if (typeof startDate === "string") {
    startDate = dayjs(startDate);
  }
  if (typeof endDate === "string") {
    endDate = dayjs(endDate);
  }

  // startDate와 endDate가 정의되지 않았을 경우 기본값 설정
  if (!startDate || !endDate) {
    startDate = dayjs();
    endDate = dayjs().add(1, "day");
  }

  const diffDay = endDate.diff(startDate, "day");

  // 총 인원 계산
  const totalPeople = people?.adult + people?.kids + people?.baby;

  const handleReset = () => {
    clearAll()
  }

  return (
    <div className="w-full flex justify-start gap-2 py-2 ml-6" >
      {/* 날짜 버튼 */}
      <Link href='/search/date' prefetch={true}>
        <Button
          size="sm"
          color="white"
          outline="outlineSemi"
          additionalClass="pr-6 py-2 hover:bg-gray-100"

        >
          <DateRangeIcon />

          {/* 월/일 몇박 순서로 표시 */}
          <span className="text-gray-700">{startDate.format('M/DD')} - {endDate.format('M/DD')}, {diffDay}박</span>

        </Button>
      </Link>

      {/* 인원버튼 */}
      <Link href='/search/headcount' prefetch={true}>
        <Button
          size="sm"
          color="white"
          outline="outlineSemi"
          additionalClass="pr-6 py-2 hover:bg-gray-100"

        >
          <PermIdentityOutlinedIcon />

          {/* 계산된 총 인원 */}
          <span className="text-gray-700">{totalPeople}명</span>

        </Button>
      </Link>

      {/* 지역버튼 */}
      <Link href='/search/place' prefetch={true}>
        <Button
          size="sm"
          color="white"
          outline="outlineSemi"
          additionalClass="pr-6 py-2 hover:bg-gray-100"

        >
          <LocationOnOutlinedIcon />

          {/* 현재 선택된 지역 */}
          <span className="text-gray-700">{area === 'all' ? '전국' : area}</span>
        </Button>
      </Link>

      {/* 초기화 버튼 */}
      <Button
        size="sm"
        color="white"
        outline="outlineSemi"
        additionalClass="pr-4 py-2 hover:bg-gray-100"
        onClick={handleReset}
      >
        <RestartAltIcon/>
      </Button>

    </div>
  )
}

export default SearchButtons