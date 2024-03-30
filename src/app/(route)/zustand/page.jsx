'use client'
import { useCounterStore } from '@/store/useCounterStore'
import React from 'react'

const Page = () => {
    const { count, increment } = useCounterStore()
    console.log(count)
    return (
        <>
            <div className='mt-10'>
                count : {count}
            </div>
            <button onClick={increment}>increment</button>
        </>
    )
}

export default Page
