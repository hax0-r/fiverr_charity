import React, { useContext } from 'react'
import pips from "../../assets/pips.svg"
import { Link } from 'react-router-dom'
import Search from '../../Components/search'
import { Donation_Received } from '../../Data/Donation_Received'
import { IoSearchOutline } from 'react-icons/io5'
import SearchList from '../../Components/SearchList'
import { SearchContext } from '../../Context/Context'

const Akaun_4 = () => {

    const { setIsSearchOpen, isSearchOpen } = useContext(SearchContext)

    return (
        <div className='min-h-screen md:bg-[#f4f7f7] fastFadeIn md:rounded-none rounded-t-xl md:mt-0 -mt-3 md:pt-0 pt-8 bg-white'>


            <div className="relative md:flex hidden items-center justify-center max-w-7xl w-full mx-auto pt-14">
                <h1 className='text-center text-[#0A7B75] font-bold md:text-[48px] tracking-wide'>DONATION TRACKER</h1>
                <Search />
            </div>

            <div className="px-5 md:hidden" >
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

            <div className="flex  items-center justify-center md:py-14 py-4 w-full">
                <div className="flex items-center justify-center flex-col w-full max-w-[1280px] mx-auto xl:p-0 p-5">
                    <div className="px-8 py-4 rounded-lg border bg-white text-center w-full md:w-auto">
                        <h2 className="font-bold ">Donation Received</h2>
                        <p className="pt-4 text-[#C4C4C4] text-sm ">Amount</p>
                        <h2 className="text-[24px] font-bold text-[#0A7B75] ">RM 1,234,567.50</h2>
                    </div>
                    <img
                        src={pips}
                        className="w-full max-w-[78%] mx-auto md:block hidden"
                        alt=""
                    />
                    <div className="grid md:grid-cols-4 grid-cols-1 w-full md:gap-4 gap-7 mt-6 md:mt-0">
                        {
                            Donation_Received.map(({ name, subName, percentage }, idx) => (
                                <div className="relative" key={idx}>
                                    <Link to={"/donation/akaun-4"}>
                                        <div className="max-w-[246px] w-full bg-white rounded-lg mx-auto flex items-center justify-center gap-3 py-3 px-4 transition-all duration-500 hover:-translate-y-1 border relative z-10">
                                            <div className="max-w-[32px] w-full  h-8 bg-zinc-300 rounded-lg" />
                                            <div className="w-full">
                                                <h2 className="flex items-center w-full justify-between font-bold text-[#4A4A4A] leading-5">
                                                    {name} <span className="text-xs"> {percentage}%</span>
                                                </h2>
                                                <p className="text-sm text-[#4A4A4A]">{subName}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex items-center justify-center h-full">
                                        <div className="w-full max-w-[286px] absolute rounded-xl bg-[#8D8D8D33] h-12 md:-bottom-3.5 -bottom-3" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Akaun_4