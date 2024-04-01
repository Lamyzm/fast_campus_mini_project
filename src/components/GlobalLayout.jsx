import { cn } from "@/utils/cn";

const GlobalLayout = ({ children, additionalClass, ...props }) => {
  return (
    <div
      className={cn(
        "pt-12 overflow-hidden flex flex-col items-center mx-auto max-w-[1000px] bg-white min-h-[100vh]",
        additionalClass
      )}
      {...props}>
      {children}
    </div>
  );
};

export { GlobalLayout };
