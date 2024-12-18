import React from 'react'
import Search from '../Components/Search'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import DonorTable from '../Components/DonorTable'
import Akaun_Active from '../Components/Akaun_Active'
import StraightSmallPip from '../assets/Components/StraightSmallPip'
import { TiArrowLeft } from 'react-icons/ti'

const Donor = () => {
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
                        <h2 className="font-bold text-[#4A4A4A]">Transaction ID: JIX12389480AMXCL</h2>
                        <p className="pt-4 text-[#C4C4C4] text-sm">Amount</p>
                        <h2 className="text-[24px] font-bold text-[#0A7B75]">RM1,234,567.50</h2>
                    </div>

                    <div className="max-w-[1150px] w-full mx-auto lg:px-5 mt-20">
                        <DonorTable />
                    </div>

                    <div className="flex items-center w-full justify-center flex-col md:mt-20 mt-10">
                        <Akaun_Active color={"#0A7B75"} />
                        <StraightSmallPip pip1={"#0CC0B1"} />
                        <div className="overflow-auto lg:block hidden md:overflow-x-auto max-w-[1100px] w-full mx-auto lg:px-5 ">
                            <table className="min-w-full text-center bg-white border border-[#E2E2E2] border-t-0 rounded-t-lg overflow-hidden text-sm">
                                <thead>
                                    <tr className="bg-[#0a7b75] text-white">
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">No.</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Transaction ID</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Donor Name/Donor ID</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Date & Time </th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Amount Donated</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`border-b border-gray-200 transition-all duration-300 hover:bg-zinc-50 bg-white `}>
                                        <td className="py-3.5 px-6">1</td>
                                        <td className="py-3.5 px-6">JIX12389480AMXCL</td>
                                        <td className="py-3.5 px-6">Abu Bakar</td>
                                        <td className="py-3.5 px-6">2/2/2022 9.34pm</td>
                                        <td className="py-3.5 px-6">RM 1,000.00</td>
                                        <td className="py-3.5 px-6">Paid out</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className='flex flex-col rounded-lg overflow-hidden w-full bg-[#0a7b75] lg:hidden'>
                            <li className=" border border-[#76afac] text-white shadow-lg">
                                <div
                                    className={`overflow-hidden transition-all duration-500 text-white`}
                                >
                                    <div className="flex text-sm items-center  border-[1.5px] border-t-0 border-x-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Transaction ID</p>
                                        <p className="p-3 font-semibold">JIX12389480AMXCL</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Donor Name/Donor ID</p>
                                        <p className="p-3 font-semibold">Abu Bakar </p>
                                    </div>
                                    <div className="flex text-sm items-center text-nowrap  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Date & Time Transferred</p>
                                        <p className="p-3 font-semibold">15/1/2022 9.00AM</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Amount Donated</p>
                                        <p className="p-3 font-semibold">RM 1,000.00</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-y-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Status</p>
                                        <p className="p-3 font-semibold">Paid out</p>
                                    </div>
                                </div>
                            </li >
                        </ul>
                        <StraightSmallPip pip1={"#0CC0B1"} />
                        <Akaun_Active color={"#0A7B75"} donate={true} />
                        <StraightSmallPip pip1={"#0CC0B1"} />
                        <div className="overflow-auto lg:block hidden md:overflow-x-auto max-w-[1100px] w-full mx-auto lg:px-5 ">
                            <table className="min-w-full bg-white border border-[#E2E2E2] border-t-0 rounded-t-lg overflow-hidden text-sm text-center">
                                <thead>
                                    <tr className="bg-[#1DA45F] text-white">
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">No.</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Transaction ID</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Donor Name/Donor ID</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Date & Time Transferred</th>
                                        <th className="py-3.5 px-6 font-semibold text-nowrap">Transferred Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`border-b border-gray-200 transition-all duration-300 hover:bg-zinc-50 bg-white `}>
                                        <td className="py-3.5 px-6">1</td>
                                        <td className="py-3.5 px-6">JIX12389480AMXCL</td>
                                        <td className="py-3.5 px-6">Abu Bakar</td>
                                        <td className="py-3.5 px-6">2/2/2022 9.34pm</td>
                                        <td className="py-3.5 px-6">RM 500.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className='flex flex-col rounded-lg overflow-hidden w-full bg-[#1da45f] lg:hidden'>
                            <li className=" border border-[#76afac] text-white shadow-lg">
                                <div
                                    className={`overflow-hidden transition-all duration-500 text-white`}
                                >
                                    <div className="flex text-sm items-center  border-[1.5px] border-t-0 border-x-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Transaction ID</p>
                                        <p className="p-3 font-semibold">JIX12389480AMXCL</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Donor Name/Donor ID</p>
                                        <p className="p-3 font-semibold">Abu Bakar </p>
                                    </div>
                                    <div className="flex text-sm items-center text-nowrap  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Date & Time Transferred</p>
                                        <p className="p-3 font-semibold">15/1/2022 9.00AM</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-t-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Amount Donated</p>
                                        <p className="p-3 font-semibold">RM 1,000.00</p>
                                    </div>
                                    <div className="flex text-sm items-center  border-[1.5px] border-x-0 border-y-0 border-[#e2e2e2] justify-between ">
                                        <p className="p-3 ">Status</p>
                                        <p className="p-3 font-semibold">Paid out</p>
                                    </div>
                                </div>
                            </li >
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Donor