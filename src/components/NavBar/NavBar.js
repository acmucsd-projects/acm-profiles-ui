import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { Typography } from "antd"
import ACMLogo from "../../images/acm-logo.png"

const { Title } = Typography

const NavigationBar = () => {
  return (
    <div className="navigationbar">
      <nav>
        <div className="nav-logo-container">
          <img src={ACMLogo} alt="acm logo" className="nav-logo-image" />
          <div style={{ paddingLeft: "5px", paddingTop: "5px" }}>
            <Title level={2} underline>
              Profiles
            </Title>
          </div>
        </div>
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
