import React from "react"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
import "./UserCard.css"

const { Title, Text } = Typography
function UserCard(props) {
  // Required props: userImage, firstName, lastName, major, graduationYear
  const { firstName, lastName, major, graduationYear, college, profileImageURL } = props

  return (
    <div className="user-card-container">
      <div className="user-image-container">
        <img className="user-card-profile-image" src={profileImageURL} alt="user" />
      </div>
      <div className="user-name-container">
        <Title level={4}>
          {firstName} {lastName}
        </Title>
      </div>
      <div className="user-details-container">
        <Text>{major}</Text>
        <Text>{college} College</Text>
        <Text>Class of {graduationYear}</Text>
      </div>
    </div>
  )
}
UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  graduationYear: PropTypes.number.isRequired,
  college: PropTypes.string.isRequired,
  profileImageURL: PropTypes.string.isRequired,
}

export default UserCard
