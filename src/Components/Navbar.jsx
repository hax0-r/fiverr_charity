import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoSearchOutline } from 'react-icons/io5'

const Navbar = () => {
    return (
        <nav className='bg-[#0A7B75] md:h-[80px] h-[90px] flex items-center justify-center '>

                <p className='text-white pb-2 poppins md:hidden font-medium text-center'>Donation Tracker</p>
            <div className="max-w-[1200px] md:flex hidden gap-3 items-center justify-between w-full mx-auto p-5">
                <p className='text-white text-xl poppins font-semibold'>100 Charity</p>
                <div className="max-w-[720px] w-full relative flex items-center justify-center">
                    <input type="text" placeholder='Find non-profits, causes or people' className='p-3 w-full pl-12 bg-white rounded-lg poppins' />
                    <IoSearchOutline className='text-[#0A7B75] text-xl absolute left-3.5' />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <FaCircleUser className='text-lg' />
                    </div>
                    <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <HiMenuAlt3 className='text-lg' />
                    </div>
                    
                </div>
            </div>

        </nav>
    )
}

export default Navbar