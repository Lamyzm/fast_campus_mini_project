'use client'
import { useSearch } from '@/context/SearchContext';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useIntersectionObserver from './hooks/useIntersectionObserver';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import Loading from './components/Loading';
import AccommodationList from './components/AccommodationList';
import Loader from './components/Loader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import SearchButtons from '@/components/searchButtons/searchButtons';
import RoomCategory from '@/components/roomCategory/RoomCategory';
import SortBox from '@/components/SortBox';
import NoSearchRoom from './components/NoSearchRoom';

const Page = () => {
    const { searchData, setSearchData } = useSearch();

    const [isEnd, setIsEnd] = useState(false)
    const ref = useRef()
    const pageRef = useIntersectionObserver(ref, {})
    const isPageEnd = !!pageRef?.isIntersecting
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeSort, setActiveSort] = useState(null)

    const fetchRoom = async ({ pageParam }) => {
        const { data } = await axios.get("http://3.35.216.158:8080/api/accommodation", {
            params: {
                page: pageParam,
                maxPeople: searchData?.headCount,
                area: searchData?.area,
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

        getNextPageParam: (lastPage) => lastPage.last ? undefined : lastPage.number + 1
    });

    const fetchNext = useCallback(async () => {
        setIsEnd(false)
        const res = await fetchNextPage();
        if (res.isError) {
            console.log(res.error);
        }
    }, [fetchNextPage]);

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
            if (window.pageYOffset > 1200) { // 예시로 300px 스크롤됐을 때 버튼을 보이게 설정
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSelectCategory = useCallback((category) => {
        setActiveCategory(category);
    }, []);

    const handleSelectSort = useCallback((sort) => {
        setActiveSort(sort);
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-gray-800 pt-8 mb-2 w-full flex justify-between" >
                <div className='ml-4 pt-[4px] flex justify-center'>{searchData?.area}숙소 {room?.pages[0].totalElements}개</div>
                <SortBox className='mr-4 hover:underline hover:bg-white' activeSort={activeSort} handleSelectSort={handleSelectSort} />
            </div>
            <SearchButtons data={searchData} />
            <RoomCategory activeCategory={activeCategory} handleSelectCategory={handleSelectCategory} />
            {room?.pages[0].empty && (<NoSearchRoom area={searchData.area} />)}
            {isLoading && (<Loading />)}
            {room?.pages.map((page, index) => (
                <React.Fragment key={index}>
                    <AccommodationList data={page.content} />
                </React.Fragment>
            ))}
            {(isEnd && hasNextPage) && <Loader />}
            <div className='w-full touch-none h-10 mb-10' ref={ref} />
            <ScrollToTopButton show={showScrollButton} />
        </>
    )
}

export default Page
