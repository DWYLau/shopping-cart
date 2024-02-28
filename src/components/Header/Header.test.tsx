import { getByPlaceholderText, getByText, render } from "@testing-library/react"
import Header from "./Header"
import { describe, it, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"

describe("Header component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it("renders shoppit", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    getByText(container, "shoppit", { exact: false })
  })

  it("renders an input element", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    getByPlaceholderText(container, "Search for items")
  })
})
