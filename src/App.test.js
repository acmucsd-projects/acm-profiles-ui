import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders NavBar link", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/navbar-brand/i)
  expect(linkElement).toBe(linkElement)
})
