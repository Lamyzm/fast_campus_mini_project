import { useSearchFilterStore } from '@/store/useSearchFilterStore'
import React from 'react'
import { Button } from '../buttons/Button'
import Icons from '../icons/icons'

const KidsSelect = ({ label, description }) => {
    const { people, setKids } = useSearchFilterStore()

    return (
        <div className="flex flex-row justify-between p-5">

            <div className="flex flex-col gap-2">
                <p className="block font-bold text-xl">{label}</p>
                <p className="block text-gray-400">{description}</p>
            </div>

            {/* -버튼 누르면 kids 인원 -1 */}
            <div className="flex flex-row justify-center justify-items-center gap-3">
                <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
                    <Button
                        size="sm"
                        outline="outlineSemi"
                        additionalClass="rounded-full px-0 h-12 w-12 p-2"
                        onClick={() => setKids(people?.kids - 1)}
                        disabled={people?.kids <= 0}
                        type="button">
                        <Icons type="RemoveIcon" size="large" color="primary" />
                    </Button>
                </div>

                {/* 현재 kids인원 표시 */}
                <div className="flex justify-center justify-items-center text-center items-center">
                    <p className="min-w-10 font-semibold text-xl">{people?.kids}</p>
                </div>

                {/* -버튼 누르면 kids 인원 +1 */}
                <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
                    <Button
                        size="sm"
                        outline="outlineSemi"
                        additionalClass="rounded-full px-0 h-12 w-12 p-2"
                        onClick={() => setKids(people?.kids + 1)}
                        type="button">
                        <Icons type="AddIcon" size="large" color="primary" />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default KidsSelect
