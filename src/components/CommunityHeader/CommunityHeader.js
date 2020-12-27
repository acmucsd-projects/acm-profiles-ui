/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { Typography, Button, Tooltip } from "antd"
import "./CommunityHeader.css"

const { Title, Text } = Typography

function CommunityHeader(props) {
  // Required props: community, canEdit, canJoin, editing, updateEditing
  const { community, canEdit, canJoin, editing, updateEditing, setCommunity, setImageModal } = props
  const buttons = []

  if (canJoin)
    buttons.push(
      <Button key="join-community-key" className="community-button" type="primary" size="large">
        + Join
      </Button>
    )
  else
    buttons.push(
      <Button key="leave-community-key" className="community-button" type="primary" size="large">
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

  return (
    <div className="community-header-container">
      <div className="community-image-container">
        {editing && (
          <span>
            <Tooltip title="Click to edit">
              <img
                className="community-image"
                src={community.image}
                alt="community"
                onClick={() => setImageModal(true)}
              />
            </Tooltip>
          </span>
        )}
        {!editing && <img className="community-image" src={community.image} alt="community" />}
      </div>
      <div className="community-info-container">
        <div className="community-info-title-container">
          <div className="community-info-name-container">
            <Title level={2}>{community.name}</Title>
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  canJoin: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  updateEditing: PropTypes.func.isRequired,
  setCommunity: PropTypes.func.isRequired,
  setImageModal: PropTypes.func.isRequired,
}

export default CommunityHeader
