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
    const description = community.description != null ? community.description : "Undecided"
    const imagesrc =
      community.profile_pic != null
        ? community.profile_pic
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
    return (
      <CommunityCard
        cid={community.cid}
        communityName={community.communityName}
        description={description}
        numMembers={community.numMembers}
        communityImageURL={imagesrc}
      />
    )
  })
  return <div>{communityCardList}</div>
}

CommunityList.propTypes = {
  communityList: PropTypes.instanceOf(Array).isRequired,
}

export default CommunityList
