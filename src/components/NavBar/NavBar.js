/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import { Typography } from "antd"
import ACMLogo from "../../images/acm-logo.png"
import { logOut } from "../../url-wrappers"

const { Title } = Typography

const NavigationBar = (props) => {
  const setAuthenticated = props.setAuthenticated
  const deauthenticate = () => {
    // eslint-disable-next-line react/prop-types
    logOut()
    setAuthenticated(false)
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
