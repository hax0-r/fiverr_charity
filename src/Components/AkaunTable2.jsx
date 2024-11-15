import React, { useContext } from 'react'
import { IoSearch } from 'react-icons/io5'
import filter from "../assets/filter.svg"
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { SlClose } from 'react-icons/sl'
import { SearchContext } from '../Context/Context'
import { AKAUN_DATA2 } from '../Data/AkaunData'

const AkaunTable2 = ({ headerColor }) => {
    const { setSearchQuerySec, searchQuerySec } = useContext(SearchContext)

    const filteredData = AKAUN_DATA2.filter((row) => {
        return (
            row.donor.toLowerCase().includes(searchQuerySec.toLowerCase()) ||
            row.transactionId.toLowerCase().includes(searchQuerySec.toLowerCase())
        );
    });

    const clearAllFunctionality = () => {
        setSearchQuerySec("")
    }

    const totalAmount = filteredData.reduce((sum, item) => {
        const amount = parseFloat(item.amount.replace(',', ''));
        return sum + amount;
    }, 0);


    return (
        <div className='relative'>
            <div className="flex items-center gap-2 justify-end absolute w-full top-[-3.2rem] right-0">
                <div className="bg-white border p-3 flex items-center w-full rounded-lg gap-2 max-w-[342px] ">
                    <IoSearch className='text-lg text-zinc-600 ' />
                    <input type="text" placeholder='Donor Name / Transaction ID'
                        className='text-xs w-full'
                        value={searchQuerySec}
                        onChange={(e) => setSearchQuerySec(e.target.value)}
                    />
                </div>
                <div className="bg-white border p-3 flex cursor-pointer items-center rounded-lg gap-2 ">
                    <img src={filter} alt="filter" />
                    <h2 className='text-[#4A4A4A] text-xs font-bold lg:block hidden'>Filter by</h2>
                </div>
                <div className="bg-white border p-3 flex cursor-pointer items-center rounded-lg gap-2 ">
                    <HiBars3BottomLeft />
                    <h2 className='text-[#4A4A4A] text-xs font-bold lg:block hidden'>Sort by</h2>
                </div>
                {
                    searchQuerySec !== "" && (
                        <SlClose onClick={clearAllFunctionality} className='text-[#D40000] fastFadeIn lg:block hidden cursor-pointer text-xl' />
                    )
                }
            </div>
            <div className="overflow-auto md:overflow-x-auto">
                <table className="min-w-full bg-white border border-[#E2E2E2] rounded-t-lg overflow-hidden text-sm">
                    <thead>
                        <tr style={{ backgroundColor: headerColor }} className={` text-white`}>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">No.</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Transaction ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Donor Name/Donor ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Date & Time Transferred</th>
                            <th className="py-3.5 px-6 text-left font-semibold text-nowrap">Transferred Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index} className={`border-b border-gray-200 transition-all duration-300 hover:bg-zinc-50 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f8fc]'}`}>
                                <td className="py-3.5 px-6">{row.id}.</td>
                                <td className="py-3.5 px-6">{row.transactionId}</td>
                                <td className="py-3.5 px-6">{row.donor}</td>
                                <td className="py-3.5 px-6">{row.date}</td>
                                <td className="py-3.5 px-6">{row.amount}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100">
                            <td colSpan="4" className="py-3 px-4 font-bold text-right"></td>
                            <td className="py-3 px-4 font-bold">RM{totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AkaunTable2






