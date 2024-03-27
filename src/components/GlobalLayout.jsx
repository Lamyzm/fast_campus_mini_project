import { cn } from "@/utils/cn";

const GlobalLayout = ({ children, additionalClass, ...props }) => {
  return (
    <div
      className={cn(
        "py-12 flex flex-col items-center mx-auto max-w-[1000px] bg-white min-h-[100vh]",
        additionalClass
      )}
      {...props}>
      {children}
    </div>
  );
};

export { GlobalLayout };
