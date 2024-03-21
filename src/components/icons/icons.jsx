import React from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import RemoveIcon from "@mui/icons-material/Remove";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const iconVariants = cva({
  size: {
    default: "",
    small: "text-sm",
    large: "text-lg",
  },
  color: {
    default: "",
    primary: `text-blue-500`,
    secondary: `text-gray-500`,
  },
});
const Icons = ({ type, size, color, additionalClass, ...props }) => {
  const IconComponent = {
    ArrowBackIcon,
    LogoutIcon,
    LoginIcon,
    SearchIcon,
    ArrowForwardIosIcon,
    AddIcon,
    RemoveIcon,
    PermIdentityOutlinedIcon,
    AccessTimeIcon,
    CheckIcon,
    HelpOutlineIcon,
    CloseIcon,
    ExpandMoreIcon,
    ScheduleIcon,
    ShoppingCartOutlinedIcon,
    HomeOutlinedIcon,
    LocationOnOutlinedIcon,
    ArrowForwardIcon,
    ArrowBackIosNewIcon,
    InsertInvitationIcon,
  }[type];

  return (
    <IconComponent
      className={cn(iconVariants({ size, color }), additionalClass)}
      {...props}
    />
  );
};
export default Icons;
