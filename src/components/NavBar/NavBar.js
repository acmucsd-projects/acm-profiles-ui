import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const NavigationBar = () => {
  return (
    <div className="navigationbar">
      <nav>
        <Link to="/" className="navigation-button">
          Log In Page
        </Link>
        <Link to="/community" className="navigation-button">
          Community Page
        </Link>
        <Link to="/search" className="navigation-button">
          Search Page
        </Link>
        <Link to="/user" className="navigation-button">
          User Page
        </Link>
      </nav>
    </div>
  )
}

export default NavigationBar
