import React from 'react'
import { AKAUN_DATA } from '../Data/AkaunData'

const AkaunTable1 = () => {
    return (
        <div>
            <div className="overflow-auto md:overflow-x-auto">
                <table className="min-w-full bg-white border border-[#E2E2E2] border-t-0 rounded-t-lg overflow-hidden text-sm">
                    <thead>
                        <tr className="bg-teal-600 text-white">
                            <th className="py-3.5 px-6 text-left font-semibold">No.</th>
                            <th className="py-3.5 px-6 text-left font-semibold">Transaction ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold">Donor Name/Donor ID</th>
                            <th className="py-3.5 px-6 text-left font-semibold">Date & Time Transferred</th>
                            <th className="py-3.5 px-6 text-left font-semibold">Amount Donated</th>
                            <th className="py-3.5 px-6 text-left font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AKAUN_DATA.map((row, index) => (
                            <tr key={index} className={`border-b border-gray-200 transition-all duration-300 hover:bg-zinc-50 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f7f8fc]'}`}>
                                <td className="py-3.5 px-6">{row.id}</td>
                                <td className="py-3.5 px-6">{row.transactionId}</td>
                                <td className="py-3.5 px-6">{row.donor}</td>
                                <td className="py-3.5 px-6">{row.date}</td>
                                <td className="py-3.5 px-6">{row.amount}</td>
                                <td className="py-3.5 px-6">{row.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AkaunTable1