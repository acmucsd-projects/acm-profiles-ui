import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
import "./UserCard.css"

const { Title, Text } = Typography
function UserCard(props) {
  // Required props: key, firstName, lastName, major, graduationYear, college, profileImageURL
  const { uuid, firstName, lastName, major, graduationYear, college, profileImageURL } = props
  return (
    <Link to={`/user/${uuid}`}>
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
    </Link>
  )
}
UserCard.propTypes = {
  key: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  graduationYear: PropTypes.number.isRequired,
  college: PropTypes.string.isRequired,
  profileImageURL: PropTypes.string.isRequired,
}

export default UserCard
