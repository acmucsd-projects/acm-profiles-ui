import React from "react"
import "./UserCard.css"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
// eslint-disable-next-line import/no-extraneous-dependencies

const { Title } = Typography
function UserCard(props) {
  // Required props: userImage, firstName, lastName, major, graduationYear
  // eslint-disable-next-line no-unused-vars
  // include userImage once you figure out the type of the import
  const { firstName, lastName, major, graduationYear } = props

  return (
    <div className="user-card-container">
      <Title level={4}>
        {firstName} {lastName}
      </Title>
      <Title level={4}>{major}</Title>
      <Title level={4}>{graduationYear}</Title>
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
