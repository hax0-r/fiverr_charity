import React, { useContext } from 'react'
import { SearchContext } from '../Context/Context'
import { IoSearchOutline } from 'react-icons/io5'
import SearchList from './SearchList'

const ResponsiveSearch = () => {

    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)

    return (
        <div>
            {
                isSearchOpen &&
                <div onClick={() => setIsSearchOpen(!isSearchOpen)} className="w-screen fastFadeIn fixed top-0 z-30 left-0 h-screen bg-[#1d1d1dbc]"></div>
            }
            <div className=" relative z-40">
                <div onClick={() => setIsSearchOpen(true)} className=" flex items-center p-3 bg-white justify-center  w-full border mx-auto rounded-xl">
                    <input type="text" className='w-full placeholder:italic px-1 py-1 text-sm' placeholder='Enter your Donor ID or Transaction ID' />
                    <IoSearchOutline className='text-2xl text-[#8F9BBA] mr-3' />
                </div>
                <div onClick={() => setIsSearchOpen(true)} className="">
                    {
                        isSearchOpen &&
                        <SearchList className={"border fastFadeIn rounded-xl mt-3 absolute top-12 w-full bg-white z-20"} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ResponsiveSearch