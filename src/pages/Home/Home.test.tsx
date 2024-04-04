import Home from "./Home"
import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import { getByText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Home page component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders banner text", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    getByText(container, "Up to 50% discount on selected items!")
  })

  it("product button changes page", async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const buttons = screen.getAllByRole("button", {
      name: "Products",
    }) as HTMLButtonElement[]

    for (const button of buttons) {
      await user.click(button)
    }

    expect(window.location.href).toBe("http://localhost:3000/products")
  })
})
