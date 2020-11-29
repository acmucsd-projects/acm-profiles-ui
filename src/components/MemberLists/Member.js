import React from "react"
import "./style.css"
import PropTypes from "prop-types"
import { Typography } from "antd"

const { Title, Text } = Typography

const Member = (props) => {
  const { firstName, lastName, major, graduationYear, college } = props

  return (
    <div className="member">
      <div className="left-div">
        <img className="member-profile-pic" src="./logo192.png" alt="member" />
      </div>

      <div className="middle-div">
        <Title level={4}>
          {firstName} {lastName}
        </Title>
      </div>

      <div className="right-div">
        <Text>{major}</Text>
        <Text>{college} College</Text>
        <Text>Class of {graduationYear}</Text>
      </div>
    </div>
  )
}

Member.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  graduationYear: PropTypes.string.isRequired,
}

export default Member
