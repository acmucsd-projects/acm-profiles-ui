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

    // image is also a part of this, need to add
    const searchResults = [
      {
        uuid: 123456,
        firstName: "Patrick",
        lastName: "Brown",
        major: "Computer Science",
        graduationYear: 2023,
        college: "Sixth",
        profileImageURL:
          "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
      },
      {
        uuid: 654321,
        firstName: "John",
        lastName: "Smith",
        major: "Computer Engineering",
        graduationYear: 2022,
        college: "Warren",
        profileImageURL:
          "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
      },
    ]

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
            {searchResults.map((user) => (
              <UserCard
                firstName={user.firstName}
                lastName={user.lastName}
                major={user.major}
                graduationYear={user.graduationYear}
                college={user.college}
                profileImageURL={user.profileImageURL}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default SearchPage
