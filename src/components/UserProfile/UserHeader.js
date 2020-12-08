import React, { Component } from "react"
import PropTypes from "prop-types"
import { Typography, Button } from "antd"
import "./UserHeader.css"

const { Title, Text } = Typography

class UserHeader extends Component {
  // Required props: user (currently placeholder), editable, joinable
  constructor(props) {
    super(props)
    this.state = {
      /* vvv placeholder information vvv */
      user: {
        image:
          "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
        name: "John Doe",
        major: "Computer Science",
        year: "2nd",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      /* ^^^ placeholder information ^^^ */
      editable: props.editable,
      followable: props.followable,
    }
  }

  render() {
    const {
      user: { image, name, major, year, description },
      editable,
      followable,
    } = this.state

    const buttons = []

    if (editable)
      buttons.push(
        <Button className="user-button" size="large">
          Edit Profile
        </Button>
      )
    else if (followable)
      buttons.push(
        <Button className="user-button" type="primary" size="large">
          + Follow
        </Button>
      )
    else
      buttons.push(
        <Button className="user-button" size="large">
          - Unfollow
        </Button>
      )

    return (
      <div className="user-header-container">
        <div className="user-image-container">
          <img className="user-image" src={image} alt="user" />
        </div>
        <div className="user-info-container">
          <div className="user-info-title-container">
            <div className="user-info-name-container">
              <Title level={2}>{name}</Title>
              <Title level={3}>
                {year} Year - {major}
              </Title>
            </div>
            <div className="user-info-button-container">{buttons}</div>
          </div>
          <Text>{description}</Text>
        </div>
      </div>
    )
  }
}

UserHeader.propTypes = {
  editable: PropTypes.bool.isRequired,
  followable: PropTypes.bool.isRequired,
}

export default UserHeader
