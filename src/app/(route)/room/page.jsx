'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import Loading from './components/Loading';
import AccommodationList from './components/AccommodationList';
import Loader from './components/Loader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SearchButtons from '@/components/searchButtons/searchButtons';
import RoomCategory from '@/components/roomCategory/RoomCategory';
import SortBox from '@/components/SortBox';
import NoSearchRoom from './components/NoSearchRoom';
import { useSearchFilterStore } from '@/store/useSearchFilterStore';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useIsSearchedStore } from '@/store/useIsSearchStore';


const Page = () => {
    const queryClient = useQueryClient();
    const { area, people } = useSearchFilterStore()
    const [isEnd, setIsEnd] = useState(false)
    const ref = useRef()
    const pageRef = useIntersectionObserver(ref, {})
    const isPageEnd = !!pageRef?.isIntersecting
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeSort, setActiveSort] = useState(null)
    const { setIsSearched } = useIsSearchedStore()

    const fetchRoom = async ({ pageParam }) => {
        const { data } = await axios.get("http://3.35.216.158:8080/api/accommodation", {
            params: {
                page: pageParam,
                maxPeople: people?.adult + people?.kids + people?.baby,
                area: area,
                category: activeCategory,
                sort: activeSort
            }
        });
        return data;
    }

    const { data: room, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['room', activeCategory, activeSort],
        queryFn: ({
            pageParam = 0,
        }) => fetchRoom({ pageParam }),

        getNextPageParam: (lastPage) => lastPage.last ? undefined : lastPage.number + 1,
        enabled: !!area && !!people,
    });

    const fetchNext = useCallback(async () => {
        setIsEnd(false)
        const res = await fetchNextPage();
        if (res.isError) {
            console.log(res.error);
        }
    }, [fetchNextPage]);

    // 페이지 새로고침하면 area, people가 기본값으로 설정돼서 쿼리 요청이 날라가는 문제가 발생
    // area, people가 정상적으로 업데이트가 된 후 fetch를 보장하기 위해 처음 날린 query는 버리고 재 요청
    useEffect(() => {
        if (area && people) {
            queryClient.removeQueries('room');
            fetchNextPage(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [area, people])


    useEffect(() => {
        let timerId
        if (isPageEnd && hasNextPage) {
            setIsEnd(true)
            timerId = setTimeout(() => {
                fetchNext();
            }, 2000);
        }
        return () => clearTimeout(timerId);

    }, [isPageEnd, hasNextPage, fetchNext])

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 1200) { // 예시로 1200px 스크롤됐을 때 버튼을 보이게 설정
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsSearched()

    }, [])


    const handleSelectCategory = useCallback((category) => {
        setActiveCategory(category);
    }, []);

    const handleSelectSort = useCallback((sort) => {
        setActiveSort(sort);
    }, []);

    return (
        <>
            {/* 숙소 검색 결과 몇개인지, sort 컴포넌트 */}
            <div className="text-2xl font-bold text-gray-800 pt-8 mb-2 w-full flex justify-between" >
                {room?.pages[0].totalElements ? (
                    <div className='ml-4 pt-[4px] flex justify-center'>검색된 {area === 'all' ? '전국' : area}숙소 {room?.pages[0].totalElements}개</div>
                )
                    : (
                        <div className='ml-4 pt-[4px] flex justify-center'>검색된 {area === 'all' ? '전국' : area}숙소 0개</div>
                    )
                }

                <SortBox className='mr-4 hover:underline hover:bg-white' activeSort={activeSort} handleSelectSort={handleSelectSort} />
            </div>

            {/* 현재 검색된 필터 정보  */}
            <SearchButtons />

            {/* 숙소 카테고리 설정 컴포넌트 기본값은 all */}
            <RoomCategory activeCategory={activeCategory} handleSelectCategory={handleSelectCategory} />

            {/* 응답 데이터에 epmty (검색된 숙소 결과가 없는지)가 true면 NoSearchRoom를 보여준다.  */}
            {room?.pages[0].empty && (<NoSearchRoom />)}

            {/* 로딩중이면 */}
            {isLoading && (<Loading />)}

            {/* 가져온 데이터 화면에 표시 */}
            {room?.pages.map((page, index) => (
                <React.Fragment key={index}>
                    <AccommodationList data={page.content} />
                </React.Fragment>
            ))}

            {/* 화면 끝에 도달 했고 가져올 다음 페이지가 있으면 */}
            {(isEnd && hasNextPage) && <Loader />}

            {/* 화면끝 감지 ref */}
            <div className='w-full touch-none h-10 mb-10' ref={ref} />

            <ScrollToTopButton show={showScrollButton} />
        </>
    )
}

export default Page
