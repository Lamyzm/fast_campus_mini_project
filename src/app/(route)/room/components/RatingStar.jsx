import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const RatingStar = ({ rating }) => {

    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const starIcons = [];

        // fullStars 개수만큼 별 아이콘 추가
        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<StarIcon key={`star-full-${i}`} />);
        }

        // hasHalfStar가 true이면 반 별 아이콘 추가
        if (hasHalfStar) {
            starIcons.push(<StarHalfIcon key="star-half" />);
        }

        // 남은 별 아이콘 추가 (채워져야 하는 별 아이콘)
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starIcons.push(<StarBorderIcon key={`star-empty-${i}`} />);
        }

        return starIcons;
    };

    return (
        <div className="text-yellow-500">
            {renderRating(rating)}
        </div>
    )
}

export default RatingStar
