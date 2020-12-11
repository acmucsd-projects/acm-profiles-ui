import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { Typography } from "antd"
import ACMLogo from "../../images/acm-logo.png"

const { Title } = Typography

const NavigationBar = (props) => {
  const deauthenticate = () => {
    // eslint-disable-next-line react/prop-types
    props.setAuthenticated(false)
    // eslint-disable-next-line react/prop-types
    props.setUserId(-1)
  }

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
        <Link to="/" className="navigation-button" onClick={() => deauthenticate()}>
          Sign Out
        </Link>
        <Link to="/user" className="navigation-button">
          My Profile
        </Link>
        <Link to="/search" className="navigation-button">
          Search Page
        </Link>
      </nav>
    </div>
  )
}

export default NavigationBar
