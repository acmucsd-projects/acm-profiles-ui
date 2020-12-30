/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { Typography } from "antd"
import ACMLogo from "../../images/acm-logo.png"
import { logOut } from "../../url-wrappers"

const { Title } = Typography

const NavigationBar = (props) => {
  const history = useHistory()
  const Deauthenticate = () => {
    // eslint-disable-next-line react/prop-types
    logOut(history)
    props.setAuthenticated(false)
    props.setUUID("")
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
        <Link className="navigation-button" onClick={() => Deauthenticate()}>
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
