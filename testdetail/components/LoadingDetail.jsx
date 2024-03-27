import React from 'react'

const LoadingDetail = () => {
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto py-6">
                <div className="flex flex-col border-gray-300">
                    <div className="m-6">
                        <div className="rounded-md h-[770px] bg-gray-100 min-w-[170px] relative z-0">
                            <div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />
                        </div>
                        <div className="flex-col p-4 flex space-y-6 justify-between w-full ">
                            <div className="bg-gray-200 animate-pulse h-20 w-3/4 rounded-md mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingDetail
