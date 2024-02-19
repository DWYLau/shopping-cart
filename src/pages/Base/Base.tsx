import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom"

function Base() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Base
