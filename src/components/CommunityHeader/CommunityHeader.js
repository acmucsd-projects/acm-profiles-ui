/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { Typography, Button, Tooltip } from "antd"
import "./CommunityHeader.css"
import { joinCommunity, leaveCommunity } from "../../url-wrappers"

const { Title, Text } = Typography

function CommunityHeader(props) {
  // Required props: community, canEdit, canJoin, editing, updateEditing
  const {
    community,
    canEdit,
    canJoin,
    setCanJoin,
    editing,
    updateEditing,
    setCommunity,
    setImageModal,
  } = props

  const handleJoin = () => {
    joinCommunity(community.ucid)
    setCanJoin(false)
  }
  const handleLeave = () => {
    leaveCommunity(community.ucid)
    setCanJoin(true)
  }
  const buttons = []

  if (canJoin)
    buttons.push(
      <Button
        key="join-community-key"
        className="community-button"
        type="primary"
        size="large"
        onClick={handleJoin}
      >
        + Join
      </Button>
    )
  else
    buttons.push(
      <Button
        key="leave-community-key"
        className="community-button"
        type="primary"
        size="large"
        onClick={handleLeave}
      >
        Leave
      </Button>
    )

  if (canEdit)
    buttons.push(
      <Button className="community-button" size="large" onClick={() => updateEditing(true)}>
        Edit Community
      </Button>
    )

  const handleDescriptionChange = (newDescription) => {
    const tempCommunity = {}
    Object.assign(tempCommunity, community)
    tempCommunity.description = newDescription
    setCommunity(tempCommunity)
  }
  const imgSrc =
    community.profile_image_link === null
      ? "https://www.freeiconspng.com/thumbs/community-icon/community-icon-21.png"
      : community.profile_image_link
  return (
    <div className="community-header-container">
      <div className="community-image-container">
        {editing && (
          <span>
            <Tooltip title="Click to edit">
              <img
                className="community-image"
                src={imgSrc}
                alt="community"
                onClick={() => setImageModal(true)}
              />
            </Tooltip>
          </span>
        )}
        {!editing && <img className="community-image" src={imgSrc} alt="community" />}
      </div>
      <div className="community-info-container">
        <div className="community-info-title-container">
          <div className="community-info-name-container">
            <Title level={2}>{community.title}</Title>
          </div>
          <div className="community-info-button-container">{buttons}</div>
        </div>
        {editing && (
          <Text
            editable={{ autoSize: { minRows: 5, maxRows: 5 }, onChange: handleDescriptionChange }}
          >
            {community.description}
          </Text>
        )}
        {!editing && <Text>{community.description}</Text>}
      </div>
    </div>
  )
}

CommunityHeader.propTypes = {
  community: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profile_image_link: PropTypes.string.isRequired,
  }).isRequired,
  canJoin: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  setCanJoin: PropTypes.func.isRequired,
  updateEditing: PropTypes.func.isRequired,
  setCommunity: PropTypes.func.isRequired,
  setImageModal: PropTypes.func.isRequired,
}

export default CommunityHeader
