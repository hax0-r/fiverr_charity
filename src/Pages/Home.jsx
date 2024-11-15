import React, { useContext, useState } from 'react';
import Search from '../Components/Search';
import FourPips from '../assets/Components/FourPips';
import ResponsiveSearch from '../Components/ResponsiveSearch';
import Akaun from '../Components/Akaun';
import Akaun_Active from '../Components/Akaun_Active';
import pips4_1 from "../assets/pips4/pips4_1.svg";
import pips4_2 from "../assets/pips4/pips4_2.svg";
import pips4_3 from "../assets/pips4/pips4_3.svg";
import pips4_4 from "../assets/pips4/pips4_4.svg";
import leftPipe from "../assets/pips4/leftPipe.svg";
import rightPip from "../assets/pips4/rightPip.svg";
import AkaunTable1 from '../Components/AkaunTable1';
import TwoPipes from '../assets/Components/TwoPipes';
import AkaunTable2 from '../Components/AkaunTable2';
import { SearchContext } from '../Context/Context';
import StraightSmallPip from '../assets/Components/StraightSmallPip';

const Home = () => {

    const { isSearchOpen, setIsSearchOpen } = useContext(SearchContext)

    // Use an array to manage which tab is active (only one active at a time)
    const [activeTabs, setActiveTabs] = useState([false, false, false, false]);
    const [activeTwoPipes, setActiveTwoPipes] = useState([false, false]);
    const [activeStraightSmallPip, setActiveStraightSmallPip] = useState([false, false, false]);

    // Toggle tab state, ensuring only one tab is open at a time
    const toggleTab = (index) => {
        setActiveTabs(prevTabs =>
            prevTabs.map((isActive, idx) => idx === index ? !isActive : false)
        );
    };

    // Toggle individual pipe states in activeTwoPipes
    const togglePipe = (index) => {
        setActiveTwoPipes(prevPipes =>
            prevPipes.map((_, idx) => idx === index ? !_ : false)
        );
    };

    const setActiveStraightSmallPipUpadte = (num) => {
        setActiveStraightSmallPip(prevState => {
            const updatedState = [...prevState];
            updatedState[num] = true;
            return updatedState;
        });
    }

    return (
        <div className="min-h-screen md:bg-[#f4f7f7] fastFadeIn md:rounded-none rounded-t-xl md:mt-0 -mt-3 md:pt-0 pt-8 bg-white">
            <div className="relative md:flex hidden items-center justify-center max-w-7xl w-full mx-auto pt-14">
                <h1 className="text-center text-[#0A7B75] font-bold md:text-[48px] tracking-wide">DONATION TRACKER</h1>
                <button
                    className='absolute right-5 bottom-3 font-medium poppins py-3 px-8 bg-[#0A7B75] text-white rounded-lg transition-all duration-300 hover:bg-transparent hover:text-[#0A7B75] border-2 active:translate-y-[0.15rem] border-[#0A7B75]'
                    onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    Search Donation
                </button>
                <Search />
            </div>

            <div className="px-5 md:hidden">
                <ResponsiveSearch />
            </div>

            <div className="flex items-center justify-center md:py-14 py-4 w-full">
                <div className="flex items-center justify-center flex-col w-full max-w-[1280px] mx-auto xl:p-0 p-5">
                    <div className="px-8 py-4 rounded-lg border bg-white text-center w-full md:w-auto">
                        <h2 className="font-bold">Donation Received</h2>
                        <p className="pt-4 text-[#C4C4C4] text-sm">Amount</p>
                        <h2 className="text-[24px] font-bold text-[#0A7B75]">RM 1,234,567.50</h2>
                    </div>

                    {/* FourPips with dynamic pip colors based on active tabs */}
                    <div className="lg:block hidden">
                        <FourPips
                            pip1={activeTabs[0] ? "#0CC0B1" : "#E2E2E2"}
                            pip2={activeTabs[1] ? "#0CC0B1" : "#E2E2E2"}
                            pip3={activeTabs[2] ? "#0CC0B1" : "#E2E2E2"}
                            pip4={activeTabs[3] ? "#0CC0B1" : "#E2E2E2"}
                        />
                    </div>

                    <div className="grid lg:grid-cols-4 grid-cols-1 w-full lg:gap-4 gap-7 mt-6 lg:mt-0 relative">
                        {activeTabs.map((isActive, index) => (
                            <div key={index} onClick={() => toggleTab(index)}>
                                {isActive ? <div className="lg:mt-[-9.2rem] "> <Akaun_Active color={"#0A7B75"} /></div> : <Akaun isActive={isActive} />}
                            </div>
                        ))}
                    </div>

                    {
                        activeTabs[0] && (
                            <div className=" w-full max-w-[78%] lg:block hidden">
                                <img src={pips4_1} alt="" />
                            </div>
                        )
                    }
                    {
                        activeTabs[1] && (
                            <div className=" w-full max-w-[53%] lg:block hidden">
                                <img src={pips4_2} alt="" />
                            </div>
                        )
                    }
                    {
                        activeTabs[2] && (
                            <div className=" w-full max-w-[50%] lg:block hidden">
                                <img src={pips4_3} alt="" />
                            </div>

                        )
                    }
                    {
                        activeTabs[3] && (
                            <div className=" w-full max-w-[78%] lg:block hidden">
                                <img src={pips4_4} alt="" className='ml-auto' />
                            </div>

                        )
                    }

                    {
                        (activeTabs[0] || activeTabs[1] || activeTabs[2] || activeTabs[3]) && (
                            <div className="max-w-[1100px] w-full mx-auto lg:px-5 lg:mt-0 mt-28">
                                <AkaunTable1 />
                            </div>
                        )
                    }

                    {
                        activeTabs[0] && (
                            <>

                                {/* TwoPipes with dynamic colors based on activeTwoPipes state */}
                                <div className="lg:block hidden">
                                    <TwoPipes
                                        pip1={activeTwoPipes[0] ? "#0CC0B1" : "#E2E2E2"}
                                        pip2={activeTwoPipes[1] ? "#0CC0B1" : "#E2E2E2"}
                                    />
                                </div>

                                <div className="max-w-[679px] mx-auto grid md:grid-cols-2 grid-cols-1 w-full md:gap-4 gap-7 lg:mt-0 relative pb-3.5 mt-12">
                                    <div className='cursor-pointer' onClick={() => togglePipe(0)}>
                                        <Akaun_Active color={activeTwoPipes[0] ? "#b08ff6" : "#E2E2E2"} donate={true} />
                                    </div>
                                    <div className='cursor-pointer' onClick={() => togglePipe(1)}>
                                        <Akaun_Active donate={true} color={activeTwoPipes[1] ? "#b08ff6" : "#E2E2E2"} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        (activeTabs[1]) && (
                            <>

                                {/* TwoPipes with dynamic colors based on activeTwoPipes state */}
                                <div className="">
                                    <StraightSmallPip
                                        pip1={activeStraightSmallPip[1] ? "#0CC0B1" : "#E2E2E2"}
                                    />
                                </div>

                                <div className="max-w-[679px] mx-auto grid grid-cols-1 w-full md:gap-4 gap-7 relative pb-3.5">
                                    <div className='cursor-pointer'
                                        onClick={() => setActiveStraightSmallPipUpadte(1)}
                                    >
                                        <Akaun_Active color={activeStraightSmallPip[1] ? "#0CC0B1" : "#E2E2E2"} donate={true} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        (activeTabs[2]) && (
                            <>

                                {/* TwoPipes with dynamic colors based on activeTwoPipes state */}
                                <div className="">
                                    <StraightSmallPip
                                        pip1={activeStraightSmallPip[2] ? "#0CC0B1" : "#E2E2E2"}
                                    />
                                </div>

                                <div className="max-w-[679px] mx-auto grid grid-cols-1 w-full md:gap-4 gap-7 relative pb-3.5">
                                    <div className='cursor-pointer' onClick={() => setActiveStraightSmallPipUpadte(2)}>
                                        <Akaun_Active color={activeStraightSmallPip[2] ? "#0CC0B1" : "#E2E2E2"} donate={true} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        (activeTabs[3]) && (
                            <>

                                {/* TwoPipes with dynamic colors based on activeTwoPipes state */}
                                <div className="">
                                    <StraightSmallPip
                                        pip1={activeStraightSmallPip[3] ? "#0CC0B1" : "#E2E2E2"}
                                    />
                                </div>

                                <div className="max-w-[679px] mx-auto grid grid-cols-1 w-full md:gap-4 gap-7 relative pb-3.5">
                                    <div className='cursor-pointer' onClick={() => setActiveStraightSmallPipUpadte(3)}>
                                        <Akaun_Active color={activeStraightSmallPip[3] ? "#0CC0B1" : "#E2E2E2"} donate={true} />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        activeTabs[0] && (
                            (activeTwoPipes[0] || activeTwoPipes[1]) && (
                                <>
                                    <div className="max-w-[55%] w-full lg:block hidden">
                                        <img
                                            src={activeTwoPipes[0] ? leftPipe : rightPip}
                                            alt={activeTwoPipes[0] ? "Left Pipe" : "Right Pipe"}
                                        />
                                    </div>

                                    <div className="max-w-[1100px] w-full mx-auto lg:px-5 lg:mt-0 mt-20">
                                        <AkaunTable2 headerColor={"#B08FF6"} />
                                    </div>
                                </>
                            )
                        )
                    }
                    {
                        (activeTabs[1]) && (
                            (activeStraightSmallPip[1]) && (
                                <>
                                    <div className="max-w-[28%] w-full lg:block hidden">
                                        <img
                                            src={leftPipe}
                                            alt={"Left Pipe"}
                                        />
                                    </div>

                                    <div className="max-w-[1100px] w-full mx-auto lg:px-5 lg:mt-0 mt-20">
                                        <AkaunTable2 headerColor={"#0A7B75"} />
                                    </div>
                                </>
                            )
                        )
                    }
                    {
                        (activeTabs[2]) && (
                            (activeStraightSmallPip[2]) && (
                                <>
                                    <div className="max-w-[28%] w-full lg:block hidden">
                                        <img
                                            src={leftPipe}
                                            alt={"Left Pipe"}
                                        />
                                    </div>

                                    <div className="max-w-[1100px] w-full mx-auto lg:px-5 lg:mt-0 mt-20">
                                        <AkaunTable2 headerColor={"#0A7B75"} />
                                    </div>
                                </>
                            )
                        )
                    }
                    {
                        (activeTabs[3]) && (
                            (activeStraightSmallPip[3]) && (
                                <>
                                    <div className="max-w-[28%] w-full lg:block hidden">
                                        <img
                                            src={leftPipe}
                                            alt={"Left Pipe"}
                                        />
                                    </div>

                                    <div className="max-w-[1100px] w-full mx-auto lg:px-5 lg:mt-0 mt-20">
                                        <AkaunTable2 headerColor={"#5FC2C8"} />
                                    </div>
                                </>
                            )
                        )
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;
