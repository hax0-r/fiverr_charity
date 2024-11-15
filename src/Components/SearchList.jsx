import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context/Context'

const SearchList = ({ results }) => {
    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)

    return (
        <div>
            <div className={`p-4 w-full`}>
                <h2 className='text-[#8F9BBA] text-sm font-bold'>Donor ID</h2>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/donor"} className='mt-3 w-full block'>Abu Bakar</Link>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/donor"} className='mt-3 w-full block'>Syed Ali</Link>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/donor"} className='mt-3 w-full block'>Hong Tiang</Link>
                <h2 className='text-[#8F9BBA] text-sm font-bold mt-5'>Transaction ID</h2>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/donor"} className='mt-3 w-full block'>
                    JIX12389480AMXCL</Link>
                <h2 className='text-[#8F9BBA] text-sm font-bold mt-5'>Categories</h2>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/groceries"} className='mt-3 w-full block'>Groceries</Link>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/health"} className='mt-3 w-full block'>Health</Link>
                <Link onClick={() => setIsSearchOpen(!isSearchOpen)} to={"/education"} className='mt-3 w-full block'>Education</Link>
            </div>
        </div>
    )
}

export default SearchList