import React from 'react';

const PaidLoadingDetail = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-xl bg-gray-200 h-[220px] w-[250px] md:w-[250px]"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidLoadingDetail;
