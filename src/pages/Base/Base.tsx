import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
import { SearchProvider } from "../../components/context/SearchContext"

function Base() {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
    </SearchProvider>
  )
}

export default Base
