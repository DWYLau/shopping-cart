import { describe, it, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import { vi } from "vitest"
import Card from "./Card"
import { product } from "./data.ts"

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
  })
})
