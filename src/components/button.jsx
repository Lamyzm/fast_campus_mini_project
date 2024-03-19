import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
    color: {
      primary: `bg-blue-500 text-white`,
      secondary: `bg-gray-300 text-gray-700`,
    },
  }
);

const Button = ({
  variant,
  size,
  color,
  children,
  label,
  additionalClass,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ size, color }), additionalClass)}
      {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export { Button };
