import React from "react"
import "./search-page.css"
import { Typography, Input } from "antd"
import "antd/dist/antd.css"

const { Title } = Typography

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="background">
        <div className="page-body">
          <Title size={1}>Search</Title>
          <Input className="search-bar" size="large" placeholder="Search for a ___" />
        </div>
      </div>
    )
  }
}
export default SearchPage
