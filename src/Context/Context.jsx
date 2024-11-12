import { createContext, useState } from "react";

export const SearchContext = createContext(null)

export const ContextProvider = ({ children }) => {
    const [searchItem, setSearchItem] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const obj = {
        searchItem,
        setSearchItem,
        isSearchOpen,
        setIsSearchOpen
    }

    return (
        <SearchContext.Provider value={obj}>
            {children}
        </SearchContext.Provider>
    )
}