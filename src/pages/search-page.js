/* eslint-disable react/destructuring-assignment */
import React from "react"
import "./search-page.css"
import { Typography, Input, Select, Button } from "antd"
import "antd/dist/antd.css"
import UserCard from "../components/UserList/UserCard"
import CreateCommunityModal from "../components/UI/CreateCommunityModal"

import { searchUser } from "../url-wrappers"

const { Title, Text } = Typography
const { Option } = Select
const { Search } = Input

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: "user",
      searchResults: null,
      noResults: false,
      showCreateCommunityModal: false,
      loading: false,
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.setVisible = this.setVisible.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  setVisible(v) {
    this.setState({ showCreateCommunityModal: v })
  }

  handleSelectChange(value) {
    this.setState({ searchType: value })
  }

  async handleSearch(searchQuery) {
    // get search results here, store in state, use to create a list of user cards
    if (searchQuery !== "") {
      // eslint-disable-next-line no-unused-vars
      const { searchType } = this.state

      // pull search results from api
      this.setState({ loading: true })
      const currentSearchResults = await searchUser(searchQuery)
      this.setState({
        searchResults: currentSearchResults,
        noResults: currentSearchResults.data.length === 0,
        loading: false,
      })
    }
  }

  render() {
    const { searchType, searchResults, noResults, showCreateCommunityModal } = this.state
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
            {this.state.loading ? (
              <Text>Loading...</Text>
            ) : (
              <>
                {noResults === true && (
                  <Text>
                    We couldn&apos;t find any results for your search, maybe you mistyped?
                  </Text>
                )}
                {searchResults !== null && noResults === true && searchType === "community" && (
                  <div>
                    <br />
                    <Text> Or, </Text>
                    <Button type="link" onClick={() => this.setVisible(true)}>
                      Create a community
                    </Button>
                    <Text> if it doesn&apos;t exist! </Text>
                  </div>
                )}
                {searchResults != null &&
                  searchResults.data.map((user) => (
                    <UserCard
                      key={user.uuid}
                      uuid={user.uuid}
                      firstName={user.first_name}
                      lastName={user.last_name}
                      major={user.major}
                      graduationYear={user.grad_year}
                      college={user.college === null ? "Undeclared" : user.college}
                      profileImageURL={
                        user.profile_pic != null
                          ? user.profile_pic
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                      }
                    />
                  ))}
              </>
            )}
          </div>
        </div>
        <CreateCommunityModal isVisible={showCreateCommunityModal} setVisible={this.setVisible} />
      </div>
    )
  }
}
export default SearchPage
