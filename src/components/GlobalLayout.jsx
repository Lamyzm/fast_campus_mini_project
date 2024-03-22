import { cn } from "@/utils/cn";

const GlobalLayout = ({ children, additionalClass, ...props }) => {
  return (
    <div
      className={cn(
        "py-12 flex flex-col items-center justify-center mx-auto max-w-[1000px] bg-white",
        additionalClass
      )}
      {...props}>
      {children}
    </div>
  );
};

export { GlobalLayout };
