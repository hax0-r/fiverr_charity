import React from 'react';

const Akaun = ({ isActive }) => {

    return (
        <div>
            <div className="relative">
                <div className="max-w-[246px] cursor-pointer w-full bg-white rounded-lg mx-auto flex items-center justify-center gap-3 py-3 px-4 transition-all duration-500 hover:-translate-y-1 border relative z-10">
                    <div className="max-w-[32px] w-full h-8 bg-zinc-300 rounded-lg" />
                    <div className="w-full">
                        <h2 className="flex items-center w-full justify-between font-bold text-[#4A4A4A] leading-5">
                            name <span className="text-xs">23%</span>
                        </h2>
                        <p className="text-sm text-[#4A4A4A]">subName</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-full">
                    <div
                        style={{
                            backgroundColor: isActive ? "#0CC0B1" : "#E2E2E2" // Confirming style here
                        }}
                        className="w-full max-w-[286px] absolute rounded-xl h-12 md:-bottom-3.5 -bottom-3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Akaun;
