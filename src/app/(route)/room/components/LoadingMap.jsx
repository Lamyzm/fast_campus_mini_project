import React from "react";

const LoadingMap = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-6">
        <div className="flex flex-col border-gray-300">
          <div className="m-6">
            <div className="rounded-md h-[450px] bg-gray-100 min-w-[170px] relative z-0">
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingMap;
