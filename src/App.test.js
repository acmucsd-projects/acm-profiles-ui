import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

// test("renders learn react link", () => {
//   const { getByText } = render(<App />)
//   const linkElement = getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test("renders login text", () => {
  const { getAllByText } = render(<App />)
  const loginElement = getAllByText(/Log In/i)
  expect(loginElement)
})
