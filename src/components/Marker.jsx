import React, { useCallback, useEffect, useState } from 'react'

export default function Marker({ map, lat, lng, data, setCurrentRoom }) {

    const [category, setCategory] = useState(data?.category)

    const checkCategory = () => {
        if (category === '호텔') {
            setCategory('호텔')
        }
        else if (category === '모텔') {
            setCategory('모텔')
        }
        else {
            setCategory('default')
        }
    }

    useEffect(() => {
        checkCategory()
    }, [])


    const loadKakoMarker = useCallback(() => {
        if (map && lat && lng) {
            var imageSrc = `/markerImages/${category}.png`,
                imageSize = new window.kakao.maps.Size(40, 40),
                imageOption = { offset: new window.kakao.maps.Point(27, 69) };


            var markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
            );


            var markerPosition = new window.kakao.maps.LatLng(lat, lng);


            var marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage,
            });


            marker.setMap(map);


            var content = `<div class="infowindow">${data?.accommodationName}</div>`;


            var customOverlay = new window.kakao.maps.CustomOverlay({
                position: markerPosition,
                content: content,
                xAnchor: 0.6,
                yAnchor: 0.91,
            });


            window.kakao.maps.event.addListener(marker, "mouseover", function () {

                customOverlay.setMap(map);
            });


            window.kakao.maps.event.addListener(marker, "mouseout", function () {

                customOverlay.setMap(null);
            });
            window.kakao.maps.event.addListener(marker, 'click', function () {
                setCurrentRoom(data)
            });
        }
    }, [map, data]);

    useEffect(() => {
        loadKakoMarker();
    }, [loadKakoMarker, map]);
    return <></>;
}
