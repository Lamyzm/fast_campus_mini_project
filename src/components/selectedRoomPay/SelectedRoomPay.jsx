import React, { useState } from 'react'
import { Button } from '../buttons/Button'

const SelectedRoomPay = () => {                                                                     
    const [isChecked, setIsChecked] = useState(false)
    const number = 1161000
    return (
        <div className='w-full mx-auto px-6'>
            <div className="mb-4 flex">
                <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)} className="mr-2 h-5 w-5 cursor-pointer" />
                <p style={{ marginTop: '2px' }}>[필수] 만 14세 이상 이용 동의</p>
            </div>
            <div className="mb-5">
                <div className="mb-3">
                    <span className="text-blue-800 underline">이용규칙, 취소 및 환불 규칙</span> 에 동의하실 경우 결제하기를 클릭해주세요.
                </div>
                <div>
                    {isChecked ? (
                        <Button size="lg" color="primary" additionalClass="w-full">
                            <span className='font-bold text-xl tracking-wider'>{number.toLocaleString()}원 결제하기</span>
                        </Button>
                    )
                        : (
                            <Button size="lg" disabled outline="outlineSemi" additionalClass="w-full" onClick={() => setIsChecked(true)}>
                                <span className='text-black font-bold text-xl tracking-wider'>{number.toLocaleString()}원 결제하기</span>
                            </Button>
                        )}
                </div>
            </div>
        </div>
    )
}

export default SelectedRoomPay