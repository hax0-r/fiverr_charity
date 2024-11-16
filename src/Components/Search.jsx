import React, { useContext, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import SearchList from './SearchList'
import { SearchContext } from '../Context/Context'

const Search = () => {
    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)
    const hiddenSearch = useRef(null)
    const inputRef = useRef(null)

    const closeSearch = () => {
        hiddenSearch.current.classList.add('fade-out')
        setTimeout(() => {
            setIsSearchOpen(false)
        }, 500)
    }

    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isSearchOpen])

    return (
        <div>
            {isSearchOpen && (
                <div className="fastFadeIn z-40 fixed top-0 left-0" ref={hiddenSearch}>
                    <div onClick={closeSearch} className="w-screen fixed top-0 z-30 left-0 opacity-[78%] h-screen bg-[#1D1D1D]"></div>
                    <div className="max-w-[1000px] w-full bg-white z-30 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto justify-center">
                        <div className="flex items-center p-3 border-b justify-center w-full">
                            <IoSearchOutline className="text-2xl text-[#8F9BBA]" />
                            <input
                                type="text"
                                ref={inputRef}
                                className="w-full placeholder:italic px-3 py-2"
                                placeholder="Enter your Donor ID or Transaction ID to track your donation"
                            />
                        </div>
                        <SearchList />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search