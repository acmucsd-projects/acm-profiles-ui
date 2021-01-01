/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unused-prop-types */
import React from "react"
import PropTypes from "prop-types"
import CommunityCard from "./CommunityCard"
import "./CommunityList.css"

function CommunityList(props) {
  // Required props: communityList

  const communityList = props.communityList
  const communityCardList = communityList.map((community) => {
    return (
      <CommunityCard
        key={community.ucid}
        cid={community.ucid}
        communityName={community.title}
        description={community.description}
        communityImageURL={
          community.profile_image_link != null
            ? community.profile_image_link
            : "https://www.freeiconspng.com/thumbs/community-icon/community-icon-21.png"
        }
      />
    )
  })
  return <div>{communityCardList}</div>
}

CommunityList.propTypes = {
  communityList: PropTypes.instanceOf(Array).isRequired,
}

export default CommunityList
