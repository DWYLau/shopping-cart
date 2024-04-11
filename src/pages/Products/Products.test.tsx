import { render } from "@testing-library/react"
import Products from "./Products"
import { describe, it, expect } from "vitest"
import { SearchProvider } from "../../components/context/SearchContext"
import { CartProvider } from "../../components/context/CartContext"

describe("Product component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <CartProvider>
        <SearchProvider>
          <Products />
        </SearchProvider>
      </CartProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders load correctly", () => {
    const { container } = render(
      <CartProvider>
        <SearchProvider>
          <Products />
        </SearchProvider>
      </CartProvider>
    )

    expect(container.querySelector(".loader")).toBeNull()
  })
})
