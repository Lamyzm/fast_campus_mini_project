import Icons from "../icons/icons";

const { Button } = require("../buttons/Button");

const SearchButtons = () => {

return (
  <div className="w-full flex justify-start gap-3">
    <Button
    size="lg"
    color="white"
    outline="outlineSemi"
    additionalClass="w-[270px] justify-start gap-2"
    disabled>
      <Icons type="DateRangeIcon" size="large" color="primary" />
      3/21 - 3/22, 1박
    </Button>
    <Button
    size="lg"
    color="white"
    outline="outlineSemi"
    additionalClass="w-[200px] justify-start gap-2"
    disabled>
      <Icons type="PermIdentityOutlinedIcon" size="large" color="primary" />
      성인 2명
    </Button>
    <Button
    size="lg"
    color="white"
    outline="outlineSemi"
    additionalClass="w-[200px] justify-start gap-2"
    disabled>
      <Icons type="LocationOnOutlinedIcon" size="large" color="primary" />
      제주
    </Button>
  </div>
  )
}

export default SearchButtons
