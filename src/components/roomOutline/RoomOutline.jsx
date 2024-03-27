import React, { useState } from 'react'
import { SelectLayoutContainer } from '../SelectLayoutContainer'
import Icons from '../icons/icons'
import { Button } from '../buttons/Button'

const RoomOutline = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div>
                <div className="  py-8 px-4 sm:px-6 lg:px-8 ">
                    {/* 숙소 소개 */}
                    <div className="max-w-md mx-auto ">
                        <h1 className=" py-5 text-2xl font-bold text-gray-800 mb-4">숙소 소개</h1>
                        <div className="text-lg text-gray-700">
                            <p className='py-2'>안녕하세요 {data?.accommodationName}에 오신 것을 환영합니다. 당신을 놀라게 할 이색적이고 아름다운 휴식처를 찾고 계신가요? 그렇다면 {data?.accommodationName}은 당신을 기다리고 있습니다.</p>
                            <p className='py-2'>{data?.accommodationName}은 여행객들에게 특별한 경험을 제공합니다. 객실은 현대적인 편의시설과 함께 자연의 아름다움을 최대한 살린 디자인으로 꾸며져 있습니다. 모든 객실에서는 넓은 창문을 통해 멋진 풍경을 감상할 수 있으며, 개인 테라스에서는 아침에 신선한 공기를 마시며 일출을 감상할 수 있습니다.</p>
                            <p className='py-2'>우리의 객실은 현대적이고 세련된 디자인으로 꾸며져 있으며, 편안한 침대와 고급 침구로 최상의 휴식을 제공합니다. 또한 무료 Wi-Fi, 미니 바, 커피/차 메이커 등과 같은 편의 시설이 갖춰져 있어 비즈니스 출장객과 여행객들 모두에게 편안한 숙박 환경을 제공합니다.</p>
                            <p className='py-2'>지금 바로 예약을 하고, {data?.accommodationName}에서의 특별한 여행을 경험해보세요.</p>
                        </div>
                    </div>
                    {/* 시설 및 서비스 */}
                    < div className="max-w-md mx-auto mt-10" >
                        <h1 className=" py-5 text-2xl font-bold text-gray-800 mb-4">시설 및 서비스</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">주차 가능</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">조식 운영</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">객실금연</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">유료세탁</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">조식 운영</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">비지니스</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">수화물 보관</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">24시간 데스크</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">커피숍</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">와이파이</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">취사 가능</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">주방</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">매점/편의점</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">트윈베드</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">상비약</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">애견동반</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">어메니티</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">방범 CCTV</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">화재경보기</span>
                            </div>
                            <div className="flex items-center">
                                <Icons type="CheckIcon" size="large" color="primary" />
                                <span className="ml-2">야외테라스</span>
                            </div>
                        </div>
                    </div >

                    {isOpen ? (
                        <>
                            <div className="max-w-md mx-auto mt-10">
                                <h1 className="py-5 text-2xl font-bold text-gray-800 mb-4">이용 안내</h1>
                                <div className='mt-4'>
                                    <div className="text-lg font-semibold mb-2">체크인</div>
                                    <div className="text-gray-600 mb-4">15:00 ~ 00:00까지</div>
                                    <div className="text-gray-600 mb-6">얼리체크인 가능(13:00)</div>
                                </div>
                                <div className='mt-8'>
                                    <p className="text-lg font-semibold mb-2">체크아웃</p>
                                    <p className="text-gray-600 mb-4">11:00 ~ 15:00까지</p>
                                    <p className="text-gray-600 mb-6">레이트체크아웃 가능(00:00)</p>
                                </div>
                                <div className='mt-8'>
                                    <p className="text-lg font-semibold mb-2">입실</p>
                                    <p className="text-gray-600 mb-4">아동입실 허용</p>
                                </div>
                                <div className='mt-8'>
                                    <p className="text-lg font-semibold mb-2">금연</p>
                                    <p className="text-gray-600 mb-4">전 객실 금연</p>
                                </div>
                            </div>
                            <div className="max-w-md mx-auto mt-10">
                                <h1 className="py-5 text-2xl font-bold text-gray-800 mb-4">예약 공지</h1>
                                <div className="text-lg text-gray-700">
                                    <p className="mb-4">체크인: 15:00 / 체크아웃: 11:00</p>
                                    <p className="mb-4">얼리 체크인 및 레이트 체크아웃 요금:</p>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>얼리 체크인 (13:00): 시간당 10,000원의 퇴실 지연료</li>
                                        <li>레이트 체크아웃 (00:00): 15:00 이후 체크아웃 시 1박 요금 추가</li>
                                    </ul>
                                    <p className="mb-4">객실키 분실 시 추가비용: 10,000원</p>
                                    <p className="mb-4">객실 층수 및 전망은 선택 불가능하며, 예약순으로 자동 배정됩니다.</p>
                                    <p className="mb-4">침구 추가 시 1채당 침구 추가 비용: 15,000원 (현장결제)</p>
                                    <p className="mb-4">추가 인원 투숙 불가능으로 인한 취소 및 객실 변경 불가</p>
                                    <p>기준 인원 외 추가 인원 투숙 시 이용이 다소 불편할 수 있습니다.</p>
                                </div>
                            </div>
                        </>
                    )
                        : (<>
                            <div className='max-w-md mx-auto mt-16 flex justify-center items-center px-5'>
                                <Button size="lg" type="rounded" color="primary" additionalClass="w-full" onClick={() => setIsOpen(true)}>
                                    전체보기
                                </Button>
                            </div>
                        </>
                        )}
                </div>
            </div>
        </>
    )
}

export default RoomOutline

