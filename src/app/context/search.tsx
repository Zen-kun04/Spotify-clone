"use client";

import { createContext, useState, Dispatch, SetStateAction, useContext } from "react";

const SearchContext = createContext({
    results: [],
    setResults: (): [] => []
});

export const SearchContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    
    return (
        <SearchContext.Provider value={{results, setResults}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext);