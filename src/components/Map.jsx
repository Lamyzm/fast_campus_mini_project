/* global kakao */
'use client'
import Script from 'next/script'
import React from 'react'


const Map = ({ lat, lng, setMap }) => {
    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: 2
            };
            const map = new window.kakao.maps.Map(container, options)
            setMap(map)
        })
    }
    return (
        <>
            <Script
                strategy='afterInteractive'
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
                onReady={loadKakaoMap}
            />
            <div id="map" className='w-[80%] h-screen rounded-xl'>

            </div>
        </>
    )
}

export default Map
