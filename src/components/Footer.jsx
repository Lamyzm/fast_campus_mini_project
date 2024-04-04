import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center mt-8">
                    <h3 className="text-2xl mb-3 text-white font-extrabold outline-text">FastCampus Mini-Project Team3</h3>
                    <p className='text-gray-700'>Next App.</p>
                    <div className="flex justify-center my-10">
                        <Link href='https://github.com/KDT1-FE/KDT_FE7_Mini-Project'>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-4">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className="text-xs text-gray-800">Click Me</p> {/* 글자색 변경 */}
                                    <p className="text-sm md:text-base text-gray-800">Our Team Repository</p>
                                </div>
                            </div>
                        </Link>
                        <Link href='https://www.notion.so/3-44d96fead51444be873c7c10a7a5c64d'>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/768px-Notion-logo.svg.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className="text-xs text-gray-800">Click Me</p> {/* 글자색 변경 */}
                                    <p className="text-sm md:text-base text-gray-800">Our Team Notion</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Developed in, 2024.</p>
                    <div className="order-1 md:order-2">
                        <Link href='https://www.notion.so/7-31ea39d13e3c4634a01409c14bdf85db'><span className="px-2 text-gray-800">About Project</span></Link> {/* 글자색 변경 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
