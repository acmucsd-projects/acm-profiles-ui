import React from "react"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
import "./UserCard.css"
// eslint-disable-next-line import/no-extraneous-dependencies

const { Title, Text } = Typography
function UserCard(props) {
  // Required props: userImage, firstName, lastName, major, graduationYear
  // eslint-disable-next-line no-unused-vars
  // include userImage once you figure out the type of the import
  const { firstName, lastName, major, graduationYear } = props

  return (
    <div className="user-card-container">
      <div className="user-image-container">
        <p>a</p>
      </div>
      <div className="user-name-container">
        <Title level={4}>
          {firstName} {lastName}
        </Title>
      </div>
      <div className="user-details-container">
        <Text className="user-detail-text">{major}</Text>
        <Text className="user-detail-text">Class of {graduationYear}</Text>
      </div>
    </div>
  )
}
UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  graduationYear: PropTypes.number.isRequired,
}

export default UserCard
