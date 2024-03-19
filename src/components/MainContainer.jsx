import { cn } from "@/utils/cn";

const MainContainer = ({ children, additionalClass, ...props }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center mx-auto max-w-[1000px]", additionalClass)} {...props}>
      {children}
    </div>
  );
};

export { MainContainer };