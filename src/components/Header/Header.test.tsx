import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
})
