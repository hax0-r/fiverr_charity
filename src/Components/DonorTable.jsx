import React, { useContext, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import filter from "../assets/filter.svg"
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { SlClose } from 'react-icons/sl'
import { SearchContext } from '../Context/Context'
import { AKAUN_DATA_Donate } from '../Data/AkaunData'
import { IoIosArrowDown, IoIosCloseCircle } from 'react-icons/io'

const AccordionItem = ({ transactionId, donor, date, amount, status, index, isOpen, onClick }) => {
    const contentRef = useRef();

    return (
        <li className=" border-b border-[#76afac] text-white shadow-lg">
            <h2
                onClick={onClick}
                className="flex bg-[#0a7b75] flex-row justify-between items-center font-medium text-sm p-3 cursor-pointer"
            >
                <span>{index + 1}. {transactionId}</span>
                <div className="flex items-center gap-2">

                    <span>{donor}</span>
                    <IoIosArrowDown className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-500`}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
                }}
                ref={contentRef}
            >
                <div className="flex text-sm items-center bg-[#ebecec] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">Transaction ID</p>
                    <p className="p-3 font-semibold">{transactionId}</p>
                </div>
                <div className="flex text-sm items-center bg-[#f4f7f7] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">Donor Name/Donor ID</p>
                    <p className="p-3 font-semibold">{donor}</p>
                </div>
                <div className="flex text-sm items-center text-nowrap bg-[#ebecec] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">Date & Time Transferred</p>
                    <p className="p-3 font-semibold text-nowrap">{date}</p>
                </div>
                <div className="flex text-sm items-center bg-[#f4f7f7] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">Amount Donated</p>
                    <p className="p-3 font-semibold">{amount}</p>
                </div>
                <div className="flex text-sm items-center bg-[#ebecec] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">Status</p>
                    <p className="p-3 font-semibold">{status}</p>
                </div>
            </div>
        </li >
    );
};

const DonorTable = () => {
    const { setSearchQuery, searchQuery } = useContext(SearchContext)

    const filteredData = AKAUN_DATA_Donate.filter((row) => {
        return (
            row.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const clearAllFunctionality = () => {
        setSearchQuery("")
    }

    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (idx) => {
        setOpenTab(openTab === idx ? null : idx);
    };


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
                <div className="bg-white p-3 border flex cursor-pointer items-center rounded-lg gap-2 ">
                    <HiBars3BottomLeft />
                    <h2 className='text-[#4A4A4A] text-xs font-bold md:block hidden'>Sort by</h2>
                </div>
                {
                    searchQuery !== "" && (
                        <SlClose onClick={clearAllFunctionality} className='text-[#D40000] fastFadeIn lg:block hidden cursor-pointer text-xl' />
                    )
                }
            </div>
            <div className="overflow-auto md:overflow-x-auto border rounded-lg border-[#E2E2E2] lg:block hidden">
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
                        {filteredData.length > 0 ? filteredData.map((row, index) => (
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
                                    <td colSpan="8" className="py-3.5 px-6 text-center text-[#999999] text-sm border">
                                        No Data Found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <main className="lg:hidden">
                <div className="flex justify-center items-start ">
                    <div className="w-full max-w-[1000px] ">
                        <ul className="flex flex-col rounded-lg overflow-hidden">
                            {filteredData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    index={index}
                                    transactionId={item.transactionId}
                                    donor={item.donor}
                                    date={item.date}
                                    amount={item.amount}
                                    status={item.status}
                                    isOpen={openTab === index}
                                    onClick={() => toggleTab(index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DonorTable
