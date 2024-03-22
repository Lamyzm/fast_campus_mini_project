import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Icons from '../icons/icons';

const SelectedRoomMain = () => {
    const [roomData, setRoomData] = useState(null)

    const fetchData = async () => {
        try {
            const result = await axios.get("/api/roomDetail");
            setRoomData(result.data.content);
        } catch (error) {
            console.error("Fetching data failed:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full mx-auto py-8">
            {roomData && (
                <div className="bg-gray-50 rounded-lg shadow-xl p-6">
                    <div className='py-2 px-2'>
                        <img src={roomData.image} alt={roomData.productName} className="w-full h-auto rounded-md" />
                    </div>
                    <div className="mt-12">
                        <h1 className="text-xl font-bold text-gray-800">{roomData.productName}</h1>
                        <p className="flex items-center text-blue-900 mt-2"><Icons type="LocationOnOutlinedIcon" size="large" color="primary" />{roomData.address}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectedRoomMain
