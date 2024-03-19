import { getByLabelText, render, screen } from "@testing-library/react"
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

  it("checkbox gets clicked and returns true", async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )

    const checkbox = screen.getByRole("checkbox", {
      name: "Men's Clothing",
    }) as HTMLInputElement

    await user.click(checkbox)

    expect(checkbox.checked).toEqual(true)
  })

  it("should call getCategory if checkbox is clicked", async () => {
    const mockGetCategory = vi.fn()
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )

    const checkbox = screen.getByRole("checkbox", {
      name: "Men's Clothing",
    }) as HTMLInputElement

    await user.click(checkbox)

    expect(mockGetCategory).toHaveBeenCalled()
  })

  it("should not call getCategory if checkbox is not clicked", async () => {
    const mockGetCategory = vi.fn()

    render(
      <BrowserRouter>
        <Sidebar getCategory={mockGetCategory} />
      </BrowserRouter>
    )

    expect(mockGetCategory).not.toHaveBeenCalled()
  })
})
