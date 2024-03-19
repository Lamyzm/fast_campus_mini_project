"use client";
import React from 'react'
import Slide from './Slide'

const MainSlideContainer = () => {
    return (
        <section style={{ maxWidth: '900px', margin: 'auto', marginTop: '20px' }}>
            <div style={{ padding: '16px 0' }}>
                <div className='flex items-center justify-between'>
                    <h1 style={{ fontWeight: '600', fontSize: '20px' }}>국내 인기 여행지</h1>
                </div>
            </div>
            <Slide />
        </section>
    )
}

export default MainSlideContainer
