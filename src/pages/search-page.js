import React from "react"
import "./search-page.css"
import { Typography, Input, Select, Button } from "antd"
import "antd/dist/antd.css"
import UserCard from "../components/Search/UserCard"

const { Title } = Typography
const { Option } = Select
const { Search } = Input

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: "user",
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSelectChange(value) {
    this.setState({ searchType: value })
  }

  handleSearch(searchQuery) {
    // get search results here, store in state, use to create a list of user cards
    if (searchQuery !== "") {
      const { searchType } = this.state
      // eslint-disable-next-line no-alert
      alert(`Searching for ${searchQuery} in ${searchType}`)
    }
  }

  render() {
    const { searchType } = this.state
    return (
      <div className="background">
        <div className="page-body">
          <Title size={1}>Search</Title>
          <div className="search-bar-container">
            <Select
              className="search-type-input"
              defaultValue="user"
              size="large"
              onChange={this.handleSelectChange}
            >
              <Option value="user">user</Option>
              <Option value="community">community</Option>
            </Select>
            <Search
              className="search-bar"
              size="large"
              placeholder={`Search for a ${searchType}`}
              enterButton={
                <Button type="primary" className="search-bar-button" size="large">
                  Search
                </Button>
              }
              onSearch={this.handleSearch}
            />
          </div>
          <div className="search-results-container">
            <UserCard
              firstName="Patrick"
              lastName="Brown"
              major="Computer Science"
              graduationYear={2023}
              college="Sixth"
            />
            <UserCard
              firstName="Patrick"
              lastName="Brown"
              major="Computer Science"
              graduationYear={2023}
              college="Sixth"
            />
            <UserCard
              firstName="Patrick"
              lastName="Brown"
              major="Computer Science"
              graduationYear={2023}
              college="Sixth"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default SearchPage
