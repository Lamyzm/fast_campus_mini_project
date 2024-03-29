import React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Dropdown from '@mui/joy/Dropdown';

const SortBox = ({ activeSort, handleSelectSort }) => {
    return (
        <Dropdown>
            <MenuButton variant="plain" className='bg-white border-none text-lg font-bold text-gray-800' startDecorator={<SwapVertIcon />}>
                {activeSort === null ? '추천순' : activeSort === 'minPrice,asc' ? '가격낮은순' : '가격높은순'}
            </MenuButton>
            <Menu variant="plain" className='bg-white'>
                <MenuItem className={`${activeSort === null ? 'bg-white font-bold text-blue-700' : 'bg-white font-bold text-gray-800'}`} selected={activeSort === null} onClick={() => handleSelectSort(null)}>
                    추천순
                </MenuItem>
                <MenuItem className={`${activeSort === 'minPrice,asc' ? 'bg-white font-bold text-blue-700' : 'bg-white font-bold text-gray-800'}`} selected={activeSort === 'minPrice,asc'} onClick={() => handleSelectSort('minPrice,asc')}>
                    가격낮은순
                </MenuItem>
                <MenuItem className={`${activeSort === 'minPrice,desc' ? 'bg-white font-bold text-blue-700' : 'bg-white font-bold text-gray-800'}`} selected={activeSort === 'minPrice,desc'} onClick={() => handleSelectSort('minPrice,desc')}>
                    가격높은순
                </MenuItem>
            </Menu>
        </Dropdown>
    );
}

export default SortBox;