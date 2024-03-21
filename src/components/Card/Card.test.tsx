import { describe, it, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import { getByText, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import Card from "./Card"
import { product } from "./data.ts"
import userEvent from "@testing-library/user-event"

describe("Card component", () => {
  const mockHandleQuantity = vi.fn()
  const mockAddCart = vi.fn()

  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Card
          key={product.id}
          product={product}
          handleQuantity={mockHandleQuantity}
          addCart={mockAddCart}
        />
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders product's title", () => {
    const { container } = render(
      <BrowserRouter>
        <Card
          key={product.id}
          product={product}
          handleQuantity={mockHandleQuantity}
          addCart={mockAddCart}
        />
      </BrowserRouter>
    )

    getByText(
      container,
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    )
  })

  it("should change input value if value is typed in", async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <Card
          key={product.id}
          product={product}
          handleQuantity={mockHandleQuantity}
          addCart={mockAddCart}
        />
      </BrowserRouter>
    )

    const input = screen.getByRole("spinbutton", {
      name: "",
    }) as HTMLInputElement

    await user.type(input, "5")

    expect(input.id).toBe("quantity-input")
    expect(input.value).toBe("5")
  })
})
