import React from 'react'

const TwoPipes = ({ pip1 = "#E2E2E2", pip2 = "#E2E2E2" }) => {
    return (
        <div><svg width="391" height="146" viewBox="0 0 391 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="198" width="32" height="58" fill={pip2} />
            <rect x="359" y="58" width="32" height="88" fill={pip2} />
            <rect x="198" y="75" width="32" height="193" rx="16" transform="rotate(-90 198 75)" fill={pip2} />
            <rect width="32" height="58" transform="matrix(-1 0 0 1 193 0)" fill={pip1} />
            <rect width="32" height="88" transform="matrix(-1 0 0 1 32 58)" fill={pip1} />
            <rect width="32" height="193" rx="16" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 193 75)" fill={pip1} />
        </svg>
        </div>
    )
}

export default TwoPipes