/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Typography, Button, Tooltip } from "antd"
import "./UserHeader.css"

const { Title, Text } = Typography

function UserHeader(props) {
  const editing = props.editing
  const updateEditing = props.updateEditing
  const user = props.user
  const setUser = props.setUser
  const myProfile = props.myProfile
  const followable = props.followable

  const name = `${user.first_name} ${user.last_name}`
  const gradYear = user.grad_year
  const description = user.bio
  const major = user.major != null ? user.major : "Undecided"
  const imagesrc =
    user.profile_pic != null
      ? user.profile_pic
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
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
        {editing ? (
          <Tooltip title="Edit this on the portal">
            <img className="user-image" src={imagesrc} alt="user" />
          </Tooltip>
        ) : (
          <img className="user-image" src={imagesrc} alt="user" />
        )}
      </div>
      <div className="user-info-container">
        <div className="user-info-title-container">
          <div className="user-info-name-container">
            {editing ? (
              <span>
                <Tooltip title="Edit this on the portal">
                  <Title style={{ margin: 0 }} level={2}>
                    {name}
                  </Title>
                </Tooltip>
                <Tooltip title="Edit this on the portal">
                  <Title style={{ margin: 0 }} level={3}>
                    {gradYear} - {major}
                  </Title>
                </Tooltip>
              </span>
            ) : (
              <span>
                <Title style={{ margin: 0 }} level={2}>
                  {name}
                </Title>
                <Title style={{ margin: 0 }} level={3}>
                  {gradYear} - {major}
                </Title>
              </span>
            )}
          </div>
          <div className="user-info-button-container">{buttons}</div>
        </div>
        {editing && (
          <Text
            editable={{ autoSize: { minRows: 5, maxRows: 5 }, onChange: handleDescriptionChange }}
          >
            {description}
          </Text>
        )}
        {!editing && <Text>{description}</Text>}
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
