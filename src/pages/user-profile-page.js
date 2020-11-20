import React from "react"
import "./search-page.css"
import { Typography } from "antd"
import "antd/dist/antd.css"

const { Title } = Typography

function UserProfilePage() {
  return (
    <div className="background">
      <div className="page-body">
        <Title size={1}>User Profile</Title>
      </div>
    </div>
  )
}

export default UserProfilePage
