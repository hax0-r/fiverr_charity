import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context/Context'

const SearchList = ({ className }) => {
    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)

    return (
        <div>
            <div className={`p-4 ${className}`}>
                <h2 className='text-[#8F9BBA] text-sm font-bold'>Donor ID</h2>
                <p className='mt-3'>Syed Ali</p>
                <p className='mt-3'>Abu Bakar</p>
                <p className='mt-3'>Hong Tiang</p>
                <h2 className='text-[#8F9BBA] text-sm font-bold mt-5'>Transaction ID</h2>
                <Link onClick={()=> setIsSearchOpen(!isSearchOpen)} to={"/donor"} className='mt-3'>JIX12389480AMXCL</Link>
                <h2 className='text-[#8F9BBA] text-sm font-bold mt-5'>Categories</h2>
                <p className='mt-3'>Groceries</p>
                <p className='mt-3'>Health</p>
                <p className='mt-3'>Education</p>
            </div>
        </div>
    )
}

export default SearchList