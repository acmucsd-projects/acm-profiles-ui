import React from "react"
import "./search-page.css"
import "antd/dist/antd.css"
import CommunityHeader from "../components/CommunityProfile/CommunityHeader"

// const { Title } = Typography

function CommunityProfilePage() {
  return (
    <div className="background">
      <div className="page-body">
        <CommunityHeader joinable editable={false} />
      </div>
    </div>
  )
}

export default CommunityProfilePage
