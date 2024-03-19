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
    width: {
      default: "size-5",  
      sm: "w-48",         
      md: "w-64",         
      lg: "w-96",        
    },
  }
);

const Input = ({
  size = "default",
  width = "default",
  placeholder = "Enter text",
  additionalClass,
  ...props
}) => {
  return (
    <input
      className={cn(InputVariants({ size, width }), additionalClass)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export { Input };
