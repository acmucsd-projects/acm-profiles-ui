/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import { Typography, Button, Tooltip, Menu, Dropdown } from "antd"
import { EditOutlined } from "@ant-design/icons"
import "./UserHeader.css"
import { followUser, unfollowUser } from "../../url-wrappers"

const { Title, Text } = Typography

function UserHeader(props) {
  const { editing, updateEditing, user, setUser, myProfile, followable, setFollowable } = props

  const name = `${user.first_name} ${user.last_name}`
  const gradYear = user.grad_year
  const college = user.college
  const description = user.bio
  const major = user.major != null ? user.major : "Undecided"
  const imagesrc =
    user.profile_pic != null
      ? user.profile_pic
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"

  const handleFollow = () => {
    followUser(user.uuid)
    setFollowable(false)
  }
  const handleUnfollow = () => {
    unfollowUser(user.uuid)
    setFollowable(true)
  }
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
      <Button
        key="follow-profile-key"
        className="user-button"
        type="primary"
        size="large"
        onClick={handleFollow}
      >
        + Follow
      </Button>
    )
  else if (!myProfile && !followable)
    buttons.push(
      <Button
        key="unfollow-profile-key"
        className="user-button"
        size="large"
        onClick={handleUnfollow}
      >
        - Unfollow
      </Button>
    )
  const handleCollegeChange = (v) => {
    const { key } = v
    const tempUser = {}
    Object.assign(tempUser, user)
    tempUser.college = key !== "No College" ? key : null
    setUser(tempUser)
  }
  const collegeMenu = (
    <Menu onClick={handleCollegeChange} selectedKeys={college}>
      <Menu.Item key="No College">No College</Menu.Item>
      <Menu.Item key="Revelle College">Revelle College</Menu.Item>
      <Menu.Item key="Muir College">Muir College</Menu.Item>
      <Menu.Item key="Marshall College">Marshall College</Menu.Item>
      <Menu.Item key="Warren College">Warren College</Menu.Item>
      <Menu.Item key="Roosevelt College">Roosevelt College</Menu.Item>
      <Menu.Item key="Sixth College">Sixth College</Menu.Item>
      <Menu.Item key="Seventh College">Seventh College</Menu.Item>
    </Menu>
  )

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
          <Dropdown overlay={collegeMenu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              {college !== null ? college : "No College"} <EditOutlined />
            </a>
          </Dropdown>
        )}

        {!editing && <Text>{college !== null ? college : "No College"}</Text>}
        {!editing ? (
          <Text>{description}</Text>
        ) : (
          <Tooltip title="Edit this on the portal">
            <Text>{description}</Text>
          </Tooltip>
        )}
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
  setFollowable: PropTypes.func.isRequired,
}

export default UserHeader
