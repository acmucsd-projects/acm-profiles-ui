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
  const { firstName, lastName, major, graduationYear, college } = props

  return (
    <div className="user-card-container">
      <div className="user-image-container">
        <img
          className="user-card-profile-image"
          src="https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024"
          alt="user"
        />
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
}

export default UserCard
