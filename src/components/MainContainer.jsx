import { cn } from "@/utils/cn";

const MainContainer = ({ children, additionalClass, ...props }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center min-w-[48rem] max-w-[76.8rem]", "mx-auto min-w-screen min-h-screen sm:min-h-0", additionalClass)} {...props}>
      {children}
    </div>
  );
};

export { MainContainer };