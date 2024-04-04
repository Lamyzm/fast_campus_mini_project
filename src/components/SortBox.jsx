import React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Dropdown from '@mui/joy/Dropdown';
import { useSubFilterStore } from '@/store/useSubFilterStore';

const SortBox = () => {

    const { sort, setSort } = useSubFilterStore()

    return (
        <Dropdown>
            <MenuButton variant="plain" className='bg-white border-none text-lg font-bold text-gray-800' startDecorator={<SwapVertIcon />}>
                {sort === 'rating,desc' ? '평점순' : sort === 'minPrice,asc' ? '가격낮은순' : '가격높은순'}
            </MenuButton>
            <Menu variant="plain" className='bg-white'>
                <MenuItem className={`${sort === 'rating,desc' ? 'bg-white font-bold text-blue-500' : 'bg-white font-bold text-gray-800'}`} selected={sort === 'rating,desc'} onClick={() => setSort('rating,desc')}>
                    평점순
                </MenuItem>
                <MenuItem className={`${sort === 'minPrice,asc' ? 'bg-white font-bold text-blue-500' : 'bg-white font-bold text-gray-800'}`} selected={sort === 'minPrice,asc'} onClick={() => setSort('minPrice,asc')}>
                    가격낮은순
                </MenuItem>
                <MenuItem className={`${sort === 'minPrice,desc' ? 'bg-white font-bold text-blue-500' : 'bg-white font-bold text-gray-800'}`} selected={sort === 'minPrice,desc'} onClick={() => setSort('minPrice,desc')}>
                    가격높은순
                </MenuItem>
            </Menu>
        </Dropdown>
    );
}

export default SortBox;