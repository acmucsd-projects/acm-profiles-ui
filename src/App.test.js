import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import "jest-dom/extend-expect"

test("renders LogInPage link", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/LogInPage/i)
  expect(linkElement).toBeInTheDocument()
})
