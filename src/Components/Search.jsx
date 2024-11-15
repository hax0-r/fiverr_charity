import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import SearchList from './SearchList'
import { SearchContext } from '../Context/Context'
import { AKAUN_DATA } from '../Data/AkaunData'

const Search = () => {
    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)
    const hiddenSearch = useRef(null)
    const inputRef = useRef(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

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

    useEffect(() => {
        // Filter data based on the search query
        const results = AKAUN_DATA.filter(item =>
            item.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredResults(results)
    }, [searchQuery])

    return (
        <div>
            {isSearchOpen && (
                <div className="fastFadeIn z-30 fixed top-0  left-0" ref={hiddenSearch}>
                    <div onClick={closeSearch} className="w-screen fixed top-0 z-30 left-0 opacity-[78%] h-screen bg-[#1D1D1D]"></div>
                    <div className="max-w-[1000px] w-full bg-white z-30 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto justify-center">
                        <div className="flex items-center p-3 border-b justify-center w-full">
                            <IoSearchOutline className="text-2xl text-[#8F9BBA]" />
                            <input
                                type="text"
                                ref={inputRef}
                                className="w-full placeholder:italic px-3 py-2"
                                placeholder="Enter your Donor ID, Transaction ID, or Category"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <SearchList results={filteredResults} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
