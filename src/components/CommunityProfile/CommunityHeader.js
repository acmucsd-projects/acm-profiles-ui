import React, { Component } from "react"
import PropTypes from "prop-types"
import { Typography, Button } from "antd"
import "./CommunityHeader.css"

const { Title, Text } = Typography

class CommunityHeader extends Component {
  // Required props: community (currently placeholder), editable, joinable
  constructor(props) {
    super(props)
    this.state = {
      /* vvv placeholder information vvv */
      community: {
        image:
          "https://cravingsbychrissyteigen.com/wp-content/uploads/2020/05/CookingWithAlcohol_Square.jpg",
        name: "ACM Cooking",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      /* ^^^ placeholder information ^^^ */
      editable: props.editable,
      joinable: props.joinable,
    }
  }

  render() {
    const {
      community: { image, name, description },
      editable,
      joinable,
    } = this.state

    const buttons = []

    if (joinable)
      buttons.push(
        <Button className="community-button" type="primary" size="large">
          + Join
        </Button>
      )
    else
      buttons.push(
        <Button className="community-button" type="primary" size="large">
          Leave
        </Button>
      )

    if (editable)
      buttons.push(
        <Button className="community-button" size="large">
          Edit Community
        </Button>
      )
    return (
      <div className="community-header-container">
        <div className="community-image-container">
          <img className="community-image" src={image} alt="community" />
        </div>
        <div className="community-info-container">
          <div className="community-info-title-container">
            <div className="community-info-name-container">
              <Title level={2}>{name}</Title>
            </div>
            <div className="community-info-button-container">{buttons}</div>
          </div>
          <Text>{description}</Text>
        </div>
      </div>
    )
  }
}

CommunityHeader.propTypes = {
  joinable: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
}

export default CommunityHeader
