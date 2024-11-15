import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { LuUpload } from 'react-icons/lu'

const Akaun_Active = ({ donate, color, categoryColor = "#0A7B75",ProgressColor ="#9FE870" }) => {
    return (
        <div>
            <div className="relative">
                <div className="w-[280px] fastFadeIn overflow-hidden bg-white rounded-lg mx-auto pt-3 transition-all duration-500 border relative z-10">
                    <div className="flex items-center justify-center gap-3 px-4">
                        <div style={{ backgroundColor: categoryColor }} className={`max-w-[32px] w-full  h-8 bg-[#0A7B75] rounded-lg`} />
                        <div className="w-full">
                            <h2 className="flex items-center w-full justify-between font-bold text-[#4A4A4A] leading-5">
                                name <span className="text-xs"> </span>
                            </h2>
                            <p className="text-sm text-[#4A4A4A]">subName</p>
                        </div>
                    </div>
                    <div className="bg-[#E2E2E2] h-[.5px] my-2.5 w-full px-4"></div>
                    <div className="flex items-center w-full justify-between px-4 ">
                        <p className='text-sm font-semibold'>TOTAL</p>
                        <p className='font-bold'>RM12,500.00</p>
                    </div>
                    <div className="bg-[#E2E2E2] h-[.5px] my-2.5 w-full px-4"></div>
                    <div className="flex items-center w-full  text-[#4A4A4A] px-4 justify-between ">
                        <p className='text-sm font-medium'>Completed</p>
                        <p className='font-bold text-sm'>RM12,500.00</p>
                    </div>
                    <div className="relative mx-4">
                        <div className="bg-[#E2E2E2] rounded-full overflow-hidden h-1.5 my-2 w-full"></div>
                        <div style={{ width: "100%", backgroundColor: ProgressColor }} className=" h-1.5 rounded-full absolute left-0 top-0 transition-all duration-500"></div>
                    </div>



                    {
                        !donate && (
                            <div className="bg-[#FAFAFA] pb-3 px-4  pt-2 text-sm text-[#0A7B75] flex items-center justify-between">
                                <div className="flex  items-center justify-center gap-2">
                                    <LuUpload className='cursor-pointer' />
                                    <div className="flex items-center cursor-pointer justify-center gap-1">
                                        <FaRegHeart />
                                        <p>250</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <p>10 Donors</p>
                                    <button className='px-3  py-1.5 bg-[#0A7B75] transition-all duration-500 hover:opacity-85 rounded-lg text-white'>Donate</button>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="flex items-center justify-center h-full">
                    <div
                        style={{
                            backgroundColor: color
                        }}
                        className="w-[310px] absolute rounded-xl h-12 md:-bottom-3.5 -bottom-3" />
                </div>
            </div>
        </div>
    )
}

export default Akaun_Active