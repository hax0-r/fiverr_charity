import React from 'react'
import pips from "../../assets/pips.svg"
import { Link } from 'react-router-dom'
import Search from '../../Components/search'
import { Donation_Received } from '../../Data/Donation_Received'

const Akaun_4 = () => {
    return (
        <div className='min-h-screen bg-[#f4f7f7] fastFadeIn '>


            <div className="relative flex items-center justify-center max-w-7xl w-full mx-auto pt-14">
                <h1 className='text-center text-[#0A7B75] font-bold md:text-[48px] tracking-wide'>DONATION TRACKER</h1>
                <Search />
            </div>

            <div className="flex  items-center justify-center py-14 w-full">
                <div className="flex items-center justify-center flex-col w-full max-w-[1280px] mx-auto xl:p-0 p-5">
                    <div className="px-8 py-4 rounded-lg border bg-white text-center ">
                        <h2 className="font-bold ">Donation Received</h2>
                        <p className="pt-4 text-[#C4C4C4] text-sm ">Amount</p>
                        <h2 className="text-[24px] font-bold text-[#0A7B75] ">RM 1,234,567.50</h2>
                    </div>
                    <img
                        src={pips}
                        className="w-full max-w-[78%] mx-auto"
                        alt=""
                    />
                    <div className="grid grid-cols-4 w-full gap-4">
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
                                    <div className="w-full absolute rounded-xl bg-[#8D8D8D33] h-12 -bottom-3.5 " />
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