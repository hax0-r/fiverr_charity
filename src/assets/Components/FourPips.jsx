import React from 'react'

const FourPips = ({ pip1 = "#E2E2E2", pip2 = "#E2E2E2", pip3 = "#E2E2E2", pip4 = "#E2E2E2" }) => {
    return (
        <div>
            <svg className='w-full max-w-[998px] h-[297px] '  viewBox="0 0 998 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="160" transform="matrix(-1 0 0 1 539 0)" fill={pip3} />
                <rect width="32" height="169" rx="16" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 676 175)" fill={pip3} />
                <rect width="32" height="137" transform="matrix(-1 0 0 1 676 160)" fill={pip3} />
                <rect x="467" width="32" height="160" fill={pip2} />
                <rect x="322" y="175" width="32" height="177" rx="16" transform="rotate(-90 322 175)" fill={pip2} />
                <rect x="322" y="160" width="32" height="137" fill={pip2} />
                <rect x="422" width="32" height="116" fill={pip1} />
                <rect y="131" width="32" height="454" rx="16" transform="rotate(-90 0 131)" fill={pip1} />
                <rect y="116" width="32" height="181" fill={pip1} />
                <rect width="32" height="116" transform="matrix(-1 0 0 1 584 0)" fill={pip4} />
                <rect width="32" height="446" rx="16" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 998 131)" fill={pip4} />
                <rect width="32" height="181" transform="matrix(-1 0 0 1 998 116)" fill={pip4} />
            </svg>
        </div>
    )
}

export default FourPips