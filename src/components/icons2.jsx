import React from 'react';
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import {
    ArrowBackIcon,
    LogoutIcon,
    ShoppingCartOutlinedIcon,
    LoginIcon,
    SearchIcon,
    ArrowForwardIosIcon,
    AddIcon,
    HomeOutlinedIcon,
    PermIdentityOutlinedIcon,
    LocationOnOutlinedIcon,
    AccessTimeIcon,
    CheckIcon,
    HelpOutlineIcon,
    CloseIcon,
    ExpandMoreIcon,
    ScheduleIcon
} from '@mui/icons-material';

const iconVariants = cva(
    {
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
    }
);

const Icon2 = ({
    type,
    size,
    color,
    additionalClass,
    ...props
}) => {
    const IconComponent = {
        ArrowBackIcon,
        LogoutIcon,
        ShoppingCartOutlinedIcon,
        LoginIcon,
        SearchIcon,
        ArrowForwardIosIcon,
        AddIcon,
        HomeOutlinedIcon,
        PermIdentityOutlinedIcon,
        LocationOnOutlinedIcon,
        AccessTimeIcon,
        CheckIcon,
        HelpOutlineIcon,
        CloseIcon,
        ExpandMoreIcon,
        ScheduleIcon
    }[type];

    return (
        <IconComponent
            className={cn(iconVariants({ size, color }), additionalClass)}
            {...props}
        />
    );
};

export default Icon2;