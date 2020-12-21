/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Typography, Button } from "antd"
import "./UserHeader.css"

const { Title, Text } = Typography

function UserHeader(props) {
  const editing = props.editing
  const updateEditing = props.updateEditing
  const user = props.user
  const setUser = props.setUser
  const myProfile = props.myProfile
  const followable = props.followable

  const buttons = []
  if (myProfile && !editing)
    buttons.push(
      <Button
        key="edit-profile-key"
        className="user-button"
        size="large"
        onClick={() => updateEditing(true)}
      >
        Edit Profile
      </Button>
    )
  else if (!myProfile && followable)
    buttons.push(
      <Button key="follow-profile-key" className="user-button" type="primary" size="large">
        + Follow
      </Button>
    )
  else if (!myProfile && !followable)
    buttons.push(
      <Button key="unfollow-profile-key" className="user-button" size="large">
        - Unfollow
      </Button>
    )
  const handleDescriptionChange = (newDescription) => {
    const tempUser = {}
    Object.assign(tempUser, user)
    tempUser.description = newDescription
    setUser(tempUser)
  }
  return (
    <div className="user-header-container">
      <div className="user-image-container">
        <img className="user-image" src={user.image} alt="user" />
      </div>
      <div className="user-info-container">
        <div className="user-info-title-container">
          <div className="user-info-name-container">
            <Title style={{ margin: 0 }} level={2}>
              {user.name}
            </Title>
            <Title style={{ margin: 0 }} level={3}>
              {user.year} Year - {user.major}
            </Title>
          </div>
          <div className="user-info-button-container">{buttons}</div>
        </div>
        {editing && (
          <Text
            editable={{ autoSize: { minRows: 5, maxRows: 5 }, onChange: handleDescriptionChange }}
          >
            {user.description}
          </Text>
        )}
        {!editing && <Text>{user.description}</Text>}
      </div>
    </div>
  )
}

UserHeader.propTypes = {
  editing: PropTypes.bool.isRequired,
  followable: PropTypes.bool.isRequired,
  updateEditing: PropTypes.func.isRequired,
  myProfile: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
}

export default UserHeader
