import {
  getByLabelText,
  render,
  screen,
  fireEvent,
} from "@testing-library/react"
import Sidebar from "./Sidebar"
import { describe, it, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import { vi } from "vitest"
import userEvent from "@testing-library/user-event"

describe("Sidebar component", () => {
  const mockGetCategory = vi.fn()

  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )
    expect(mockGetCategory).toHaveBeenCalledTimes(0)

    expect(container).toMatchSnapshot()
  })

  it("renders men's clothing label", () => {
    const { container } = render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )
    expect(mockGetCategory).toHaveBeenCalledTimes(0)

    getByLabelText(container, "Men's Clothing")
  })

  it("handleCheck gets clicked", () => {
    const mockHandleCheck = vi.fn()

    render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )
    const checkbox = screen.getByRole("checkbox", { name: "Men's Clothing" })
    fireEvent.change(checkbox)

    expect(checkbox.checked).toBe(true)
    expect(mockHandleCheck).toHaveBeenCalledTimes(1)
  })
})
