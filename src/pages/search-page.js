import React from "react"
import "./search-page.css"
import { Typography } from "antd"
import "antd/dist/antd.css"

const { Title } = Typography

function SearchPage() {
  return (
    <div className="background">
      <div className="page-body">
        <Title size={1}>Search</Title>
      </div>
    </div>
  )
}

export default SearchPage
