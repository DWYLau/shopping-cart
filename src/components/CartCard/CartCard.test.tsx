import CartCard from "./CartCard"
import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import { getByText, render, screen } from "@testing-library/react"
import { product } from "../Card/data"
import userEvent from "@testing-library/user-event"

describe("Cart Card component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <CartCard product={product} />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders product title", () => {
    const { container } = render(
      <BrowserRouter>
        <CartCard product={product} />
      </BrowserRouter>
    )

    getByText(
      container,
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    )
  })

  it("change quantity button is clicked", async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <CartCard product={product} />
      </BrowserRouter>
    )

    const button = screen.getByRole("button", {
      name: "Change Quantity",
    }) as HTMLElement

    await user.click(button)

    expect(screen.getByText("Confirm")).toBeTruthy()
  })
})
