/* global kakao */
'use client'
import { useLocationStore } from '@/store/useLocationStore'
import { useMapStore } from '@/store/useMapStore'
import Script from 'next/script'
import React from 'react'


const Map = () => {
    const { setNewMap,setIsMap } = useMapStore()
    const { location } = useLocationStore()
    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(location.lat, location.lng),
                level: 2
            };
            const map = new window.kakao.maps.Map(container, options)
            setNewMap(map)
            setIsMap()
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
