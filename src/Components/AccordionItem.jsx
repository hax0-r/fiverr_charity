import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, title2, content, index, isOpen, onClick }) => {
    const contentRef = useRef();

    return (
        <li className=" border-b border-[#76afac] text-white shadow-lg">
            <h2
                onClick={onClick}
                className="flex bg-[#0a7b75] flex-row justify-between items-center font-medium text-sm p-3 cursor-pointer"
            >
                <span>{index + 1}. {title}</span>
                <div className="flex items-center gap-2">

                    <span>{title2}</span>
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
                <div className="flex text-sm items-center bg-[#e2e2e286] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">{title2}</p>
                    <p className="p-3 font-semibold">{title2}</p>
                </div>
                <div className="flex text-sm items-center border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">{title2}</p>
                    <p className="p-3 font-semibold">{title2}</p>
                </div>
                <div className="flex text-sm items-center border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">{title2}</p>
                    <p className="p-3 font-semibold">{title2}</p>
                </div>
                <div className="flex text-sm items-center bg-[#e2e2e286] border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">{title2}</p>
                    <p className="p-3 font-semibold">{title2}</p>
                </div>
                <div className="flex text-sm items-center border-[1.5px] border-t-0 border-[#e2e2e2] justify-between text-[#1D1D1D]">
                    <p className="p-3 ">{title2}</p>
                    <p className="p-3 font-semibold">{title2}</p>
                </div>
            </div>
        </li >
    );
};

const Accordion = () => {
    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (idx) => {
        setOpenTab(openTab === idx ? null : idx);
    };

    const items = [
        {
            title: "JIX12389480AMXCL",
            title2: "Abu Bakar",
            content:
                "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
        },
        {
            title: "How do I track my order?",
            title2: "Abu Bakar",
            content:
                "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.",
        },
    ];

    return (
        <main className="lg:p-5 bg-blue-50 h-screen">
            <div className="flex justify-center items-start my-2">
                <div className="w-full max-w-[1000px] my-1">
                    <ul className="flex flex-col rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                title={item.title}
                                title2={item.title2}
                                content={item.content}
                                isOpen={openTab === index}
                                onClick={() => toggleTab(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Accordion;
