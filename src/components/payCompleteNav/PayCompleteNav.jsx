import Link from 'next/link'
import React from 'react'

const PayCompleteNav = () => {
    return (
        <>
            <div className="flex justify-between items-center w-[1000px] h-[65px] shadow-md bg-white z-[100]">
                <div>
                    <Link className="text-blue-800 text-xl font-semibold cursor-pointer px-[18px] py-0" href="/">
                        3조화이팅
                    </Link>
                </div>
                <div className="flex ml-[190px] items-center py-0 text-xl font-semibold justify-center flex-grow">
                    결제 완료
                </div>
                <div className="flex flex-grow"></div>
            </div>
        </>
    )
}

export default PayCompleteNav
