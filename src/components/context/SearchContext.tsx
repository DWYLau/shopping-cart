import React, { createContext, useContext, useState, ReactNode } from "react"

type SearchContextType = {
  searchValue: string | null
  setSearchValue: React.Dispatch<React.SetStateAction<string | null>>
}

type SearchProviderProps = {
  children: ReactNode
}

const SearchContext = createContext<SearchContextType>({
  searchValue: "",
  setSearchValue: () => {},
})

function useSearch(): SearchContextType {
  return useContext(SearchContext)
}

function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string | null>("")

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}

export { useSearch, SearchProvider }
