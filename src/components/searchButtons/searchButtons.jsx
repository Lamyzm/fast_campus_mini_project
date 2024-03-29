import dayjs from "dayjs";
import Icons from "../icons/icons";

const { Button } = require("../buttons/Button");

const SearchButtons = ({ data }) => {
  const startDate = dayjs(data?.date.startDate);
  const endDate = dayjs(data?.date.endDate);
  const nightCount = endDate.diff(startDate, 'day');

  return (
    <div className="w-full flex justify-start gap-2 py-2 ml-2">
      <Button
        size="sm"
        color="white"
        outline="outlineSemi"
        additionalClass="pr-6 py-2"
        disabled>
        <Icons type="DateRangeIcon" size="large" color="primary" />
        {startDate.format('M/DD')} - {endDate.format('M/DD')}, {nightCount}박
      </Button>
      <Button
        size="sm"
        color="white"
        outline="outlineSemi"
        additionalClass="pr-6 py-2"
        disabled>
        <Icons type="PermIdentityOutlinedIcon" size="large" color="primary" />
        성인 {data?.headCount}명
      </Button>
      <Button
        size="sm"
        color="white"
        outline="outlineSemi"
        additionalClass="pr-6 py-2"
        disabled>
        <Icons type="LocationOnOutlinedIcon" size="large" color="primary" />
        {data?.area}
      </Button>
    </div>
  )
}

export default SearchButtons