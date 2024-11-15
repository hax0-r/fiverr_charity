import { createContext, useState } from "react";
import { AKAUN_DATA } from "../Data/AkaunData";

export const SearchContext = createContext(null)

export const ContextProvider = ({ children }) => {
    const [searchItem, setSearchItem] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const [searchQuery, setSearchQuery] = useState("");
    const [searchQuerySec, setSearchQuerySec] = useState("");


    const obj = {
        searchItem,
        setSearchItem,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        searchQuerySec,
        setSearchQuerySec
    }

    return (
        <SearchContext.Provider value={obj}>
            {children}
        </SearchContext.Provider>
    )
}