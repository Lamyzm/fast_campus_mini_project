import React from 'react'

const ScrollToTopButton = ({ show }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`fixed bottom-10 right-10 bg-gray-700 text-white p-3 font-bold rounded-full ${show ? 'block' : 'hidden'
                }`}
            onClick={handleClick}
        >
            Top
        </button>
    )
}

export default ScrollToTopButton
