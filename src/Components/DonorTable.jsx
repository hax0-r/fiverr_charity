import React, { useContext, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import filter from "../assets/filter.svg"
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { SlClose } from 'react-icons/sl'
import { SearchContext } from '../Context/Context'
import { AKAUN_DATA } from '../Data/AkaunData'

const DonorTable = () => {
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
                <div className="bg-white p-3 border flex items-center w-full rounded-lg gap-2 max-w-[342px] ">
                    <IoSearch className='text-lg text-zinc-600 ' />
                    <input type="text" placeholder='Donor Name / Transaction ID'
                        className='text-xs w-full'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="bg-white p-3 border flex cursor-pointer items-center rounded-lg gap-2 ">
                    <img src={filter} alt="filter" />
                    <h2 className='text-[#4A4A4A] text-xs font-bold md:block hidden'>Filter by</h2>
                </div>
                <div className="bg-white p-3 border flex cursor-pointer items-center rounded-lg gap-2 ">
                    <HiBars3BottomLeft />
                    <h2 className='text-[#4A4A4A] text-xs font-bold md:block hidden'>Sort by</h2>
                </div>
                <SlClose onClick={clearAllFunctionality} className='text-[#D40000] cursor-pointer md:block hidden text-xl' />
            </div>
            <div className="overflow-auto md:overflow-x-auto border rounded-lg border-[#E2E2E2]">
                <table className="min-w-full bg-white  overflow-hidden text-sm">
                    <thead>
                        <tr className="bg-teal-600 text-center text-white">
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">No.</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Transaction ID</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Donor Name/Donor ID</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Date & Time </th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Receiver Name</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Category</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Vendor</th>
                            <th className="py-3.5 px-4 text-left font-semibold text-nowrap">Amount Donated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? filteredData.slice(0, 5).map((row, index) => (
                            <tr key={index} className={`border-b text-center border-gray-200 transition-all duration-300 hover:bg-zinc-50 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f8fc]'}`}>
                                <td className="py-3.5 px-4">{row.id}</td>
                                <td className="py-3.5 px-4">{row.transactionId}</td>
                                <td className="py-3.5 px-4">{row.donor}</td>
                                <td className="py-3.5 px-4">{row.date}</td>
                                <td className="py-3.5 px-4">{row.receiver}</td>
                                <td className="py-3.5 px-4">{row.category}</td>
                                <td className="py-3.5 px-4">{row.vendor}</td>
                                <td className="py-3.5 px-4">RM{row.amount}</td>
                            </tr>
                        ))
                            : (
                                <tr>
                                    <td colSpan="6" className="py-3.5 px-6 text-center text-[#999999] text-sm border">
                                        No Data Found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DonorTable
