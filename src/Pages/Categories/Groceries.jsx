import React from 'react'
import Search from '../../Components/Search'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Akaun_Active from '../../Components/Akaun_Active'
import AkaunTable1 from '../../Components/AkaunTable1'
import { TiArrowLeft } from 'react-icons/ti'

const Groceries = () => {
    return (
        <div className="min-h-screen bg-[#f4f7f7] fastFadeIn md:rounded-none rounded-t-xl md:mt-0 -mt-3 md:pt-0 pt-8">
            <Link to={"/"} className='md:hidden'>
                <TiArrowLeft className='absolute top-[27px] text-white text-3xl left-5' />
            </Link>
            <div className="relative md:flex hidden items-center justify-between max-w-7xl w-full mx-auto pt-14">
                <Link to={"/"} className='font-bold text-2xl flex items-center gap-2'> <MdOutlineKeyboardArrowLeft />Back </Link>
                <h1 className="text-center text-[#0A7B75] font-bold md:text-[48px] tracking-wide">DONATION TRACKER</h1>
                <Search />
            </div>
            <div className="flex items-center justify-center md:py-14 py-4 w-full">
                <div className="flex items-center justify-center flex-col w-full max-w-[1280px] mx-auto xl:p-0 p-5">
                    <div className="px-8 py-4 rounded-lg border bg-white text-center w-full md:max-w-[936px]">
                        <h2 className="font-bold">Donation Received</h2>
                        <p className="pt-4 text-[#C4C4C4] text-sm">Amount</p>
                        <h2 className="text-[24px] font-bold text-[#0A7B75]">RM1,234,567.50</h2>
                    </div>


                    <div className="flex items-center w-full  gap-8  justify-center max-w-[1000px] flex-wrap  md:mt-16 mt-8">
                        <Akaun_Active color={"#0A7B75"} />
                        <Akaun_Active color={"#0A7B75"} />
                        <Akaun_Active color={"#0A7B75"} />
                    </div>
                    <div className="max-w-[1100px] w-full mx-auto lg:px-5 md:mt-36 mt-28">
                        <AkaunTable1 headColor={"#0A7B75"} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Groceries