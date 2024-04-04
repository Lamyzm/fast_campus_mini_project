"use client";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      type: {
        default: "",
        rounded: "rounded-full",
      },
      outline: {
        default: "",
        outlineBold:
          "border border-input bg- hover:bg-accent  hover:text-accent-foreground border-gray-500 border-4",
        outlineSemi:
          "border border-input bg-background hover:bg-accent  hover:text-accent-foreground border-gray-500 border-2",
      },
      size: {
        default: "h-10 px-4 py-2 ",
        sm: "h-7  px-4 text-sm",
        lg: "h-10  px-5 text-lg",
        xl: "h-14  px-8 text-xl ",
      },
      color: {
        default: "text-black",
        black: "bg-black text-white ",
        white: "bg-white text-black ",
        red: "bg-red-300",
        gray: "bg-gray-100 hover:bg-gray-200",
        primary: "bg-blue-500 text-white",
      },
    },
    defaultVariants: {
      type: "default",
      size: "default",
      color: "default",
    },
  }
);

const Button = ({
  type,
  size,
  color,
  children,
  outline,
  label,
  onSubmit,
  additionalClass,
  ...props
}) => {
  return (
    <button
      className={cn(
        ButtonVariants({ type, size, color, outline, onSubmit }),
        additionalClass
      )}
      {...props}
      type={`${onSubmit ? "onSubmit" : "button"}`}>
      {children && children}
      {label && label}
    </button>
  );
};

export { Button };
