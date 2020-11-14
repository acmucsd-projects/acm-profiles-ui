import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders LogInPage link", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/LogInPage/i)
  expect(linkElement).toBeInTheDocument()
})
