import React from 'react'
import { SelectLayoutContainer } from '../SelectLayoutContainer'
import AdultSelect from './AdultSelect'
import BabySelect from './BabySelect'
import { Button } from '../buttons/Button'
import { useRouter } from 'next/navigation'
import KidsSelect from './KidsSelect'
import { useIsSearchedStore } from '@/store/useIsSearchStore'
import { useSearchFilterStore } from '@/store/useSearchFilterStore'

const ZustandSelectPeople = () => {

    //검색완료 페이지에서 해당 컴포넌트가 불러지면 지역을 누를때 
    //isSearched에 따라 /main으로 보낼건지, 다시 /room 페이지로 가서 query를 보낼건지 결정
    const { isSearched } = useIsSearchedStore()
    const { people, clearPeople } = useSearchFilterStore()

    const router = useRouter();

    //확인 버튼을 누르면 메인화면으로 이동
    const handleClick = () => {

        //선택 인원이 전부 0명일 때 people 초기화
        if (!people.adult && !people.kids && !people.baby) {
            clearPeople()
        }

        if (isSearched) {
            router.replace("/room");
        }
        else {
            router.replace("/");
        }
    }

    return (
        <>
            <SelectLayoutContainer>
                <div className="rounded-xl shadow-md p-4">
                    <h3 className="font-bold text-2xl p-2">게스트는 누구인가요?</h3>
                    <AdultSelect
                        label="성인"
                        description="13세 이상"

                    />
                    <KidsSelect
                        label="어린이"
                        description="3세 이상 13세 미만"

                    />
                    <BabySelect
                        label="유아"
                        description="2세 이하"

                    />
                    <div className="flex flex-row justify-end">
                        <Button
                            size="lg"
                            type="rounded"
                            color="primary"
                            additionalClass="mt-12"
                            onClick={handleClick}>
                            확인
                        </Button>
                    </div>
                </div>
            </SelectLayoutContainer>
        </>
    )
}

export default ZustandSelectPeople
