import React, { useContext, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import filter from "../assets/filter.svg"
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { SlClose } from 'react-icons/sl'
import { SearchContext } from '../Context/Context'
import { AKAUN_DATA } from '../Data/AkaunData'
import { IoIosCloseCircle } from 'react-icons/io'

const AkaunTable1 = ({ headColor = "#0A7B75" }) => {
    const { setSearchQuery, searchQuery } = useContext(SearchContext)

    const filteredData = AKAUN_DATA.filter((row) => {
        return (
            row.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const clearAllFunctionality = () => {
        setSearchQuery("")
    }

    return (
        <div className='relative'>
            <div className="flex items-center gap-2 justify-end absolute w-full top-[-3.2rem] right-0">
                <div className="bg-white px-3 border flex items-center w-full rounded-lg gap-2 max-w-[342px] ">
                    <IoSearch className='text-lg text-zinc-600 ' />
                    <input type="text" placeholder='Donor Name / Transaction ID'
                        className='text-xs p-3 w-full'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {
                        searchQuery !== "" && (
                            <IoIosCloseCircle onClick={clearAllFunctionality} className='text-[#A8A8A8] cursor-pointer text-xl md:hidden' />
                        )}
                </div>
                <div className="bg-white border px-3.5 py-2.5 md:py-3 flex cursor-pointer items-center rounded-lg gap-2 ">
                    <img src={filter} className='h-5 md:h-3.5' alt="filter" />
                    <h2 className='text-[#4A4A4A] text-xs font-bold md:block hidden'>Filter by</h2>
                </div>
                <div className="bg-white border border-[#E2E2E2] p-3 flex cursor-pointer items-center rounded-lg gap-2 ">
                    <HiBars3BottomLeft />
                    <h2 className='text-[#4A4A4A] text-xs font-bold md:block hidden'>Sort by</h2>
                </div>
                {
                    searchQuery !== "" && (
                        <SlClose onClick={clearAllFunctionality} className='text-[#D40000] fastFadeIn md:block hidden cursor-pointer text-xl' />
                    )
                }
            </div>
            <div className="overflow-auto md:overflow-x-auto border rounded-lg border-[#E2E2E2]">
                <table className="min-w-full bg-white border-t-0  overflow-hidden text-sm">
                    <thead>
                        <tr style={{ backgroundColor: headColor }} className=" text-white">
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">No.</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Transaction ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Donor Name/Donor ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Date & Time Transferred</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Amount Donated</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? filteredData.map((row, index) => (
                            <tr key={index} className={`border-b border-gray-200 transition-all duration-300 hover:bg-zinc-50 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f8fc]'}`}>
                                <td className="py-3.5 px-6">{row.id}</td>
                                <td className="py-3.5 px-6">{row.transactionId}</td>
                                <td className="py-3.5 px-6">{row.donor}</td>
                                <td className="py-3.5 px-6">{row.date}</td>
                                <td className="py-3.5 px-6">{row.amount}</td>
                                <td className="py-3.5 px-6">{row.status}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="py-3.5 px-6 text-center text-[#999999] text-sm border">
                                    No Data Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AkaunTable1


