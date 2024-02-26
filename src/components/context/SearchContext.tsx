import React, { createContext, useContext, useState, ReactNode } from "react"

type SearchContextType = {
  searchValue: string | null
  setSearchValue: React.Dispatch<React.SetStateAction<string | null>>
}

const SearchContext = createContext<SearchContextType>({
  searchValue: "",
  setSearchValue: () => {},
})

const useSearch = (): SearchContextType => useContext(SearchContext)

type SearchProviderProps = {
  children: ReactNode
}

const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string | null>("")

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}

export { useSearch, SearchProvider }
