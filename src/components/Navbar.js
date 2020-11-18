import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Log In Page</Link>
        </li>
        <li>
          <Link to="/community">Community Page</Link>
        </li>
        <li>
          <Link to="/search">Search Page</Link>
        </li>
        <li>
          <Link to="/user">User Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
