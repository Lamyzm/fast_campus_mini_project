'use client'
export default function Loading() {
    return (
        <>
          <div className="w-full lg:grid lg:grid-cols-2">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={(
                  "flex flex-col",
                  index % 2 === 0 ? "border-r border-solid border-gray-300" : "",
                  index < 9 && "border-b border-solid border-gray-300"
                )}
              >
                <div className="m-6">
                  <div className="rounded-md h-[200px] bg-gray-100 min-w-[170px] relative z-0">
                    <div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />
                  </div>
                  <div className="flex-col p-3 mt-1 flex space-y-3 justify-between w-full">
                    <div className="bg-gray-200 animate-pulse h-5 w-3/4 rounded-md" />
                    <div className="bg-gray-200 animate-pulse h-4 w-1/2 rounded-md" />
                    <div className="bg-gray-200 animate-pulse h-4 w-1/4 rounded-md" />
                    <div className="bg-gray-200 animate-pulse h-4 w-1/2 rounded-md" />
                    <div className="bg-gray-200 animate-pulse h-4 w-1/4 rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
}