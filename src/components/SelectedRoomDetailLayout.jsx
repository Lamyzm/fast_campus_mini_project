import { cn } from "@/utils/cn";

const SelectedRoomDetailLayout = ({ children, additionalClass, ...props }) => {
  return (
    <div
      className={cn(
        "w-full h-auto bg-white p-4 mx-auto flex flex-col items-center ",
        additionalClass
      )}
      {...props}>
      {children}
    </div>
  );
};

export default SelectedRoomDetailLayout;
