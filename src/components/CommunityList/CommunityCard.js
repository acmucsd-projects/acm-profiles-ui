import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "antd"
import PropTypes from "prop-types"
import "antd/dist/antd.css"
import "./CommunityCard.css"

const { Title, Text } = Typography
function CommunityCard(props) {
  // Required props: key, communityName, description, numMembers, communityImageURL
  const { cid, communityName, description, numMembers, communityImageURL } = props
  return (
    <Link to={`/user/${cid}`}>
      <div className="community-card-container">
        <div className="community-image-container">
          <img className="community-card-profile-image" src={communityImageURL} alt="user" />
        </div>
        <div className="community-name-container">
          <Title level={4}>{communityName}</Title>
        </div>
        <div className="community-details-container">
          <Text>{description}</Text>
          <Text>{numMembers}</Text>
        </div>
      </div>
    </Link>
  )
}
CommunityCard.propTypes = {
  cid: PropTypes.string.isRequired,
  communityName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numMembers: PropTypes.number.isRequired,
  communityImageURL: PropTypes.string.isRequired,
}

export default CommunityCard
