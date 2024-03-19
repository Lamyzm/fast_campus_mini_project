import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const InputVariants = cva(
  "appearance-none block bg-white text-black border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-black",
  {
    size: {
      default: "text-base", 
      sm: "text-sm",         
      lg: "text-lg",
    },
  }
);

const Input = ({
  size = "default",
  placeholder = "Enter text",
  additionalClass,
  ...props
}) => {
  return (
    <input
      className={cn(InputVariants({ size }), additionalClass)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export { Input };
