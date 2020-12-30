/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react"
import axios from "axios"
import "./search-page.css"
import { Typography, Input, Select, Button } from "antd"
import { Redirect } from "react-router-dom"
import "antd/dist/antd.css"
import UserCard from "../components/UserList/UserCard"
import UserList from "../components/UserList/UserList"
import CommunityCard from "../components/CommunityList/CommunityCard"
import CreateCommunityModal from "../components/UI/CreateCommunityModal"

import { searchUser, searchCommunity, getRecommendedUsers, getUserPromise } from "../url-wrappers"

const { Title, Text } = Typography
const { Option } = Select
const { Search } = Input
async function handleSearch(searchQuery, searchType, setSearchResults, setLoading, setNoResults) {
  // get search results here, store in state, use to create a list of user cards
  if (searchQuery !== "") {
    setLoading(true)

    let currentSearchResults = []
    if (searchType === "user") currentSearchResults = await searchUser(searchQuery)
    else if (searchType === "community") currentSearchResults = await searchCommunity(searchQuery)
    setSearchResults(currentSearchResults)
    setNoResults(currentSearchResults.data.length === 0)
    setLoading(false)
  }
}
function SearchPage() {
  const [searchType, setSearchType] = useState("user")
  const [searchResults, setSearchResults] = useState(null)
  const [noResults, setNoResults] = useState(false)
  const [showCreateCommunityModal, setShowCreateCommunityModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [ucid, setUcid] = useState(null)
  const [recommendedList, setRecommendedList] = useState(null)

  useEffect(() => {
    async function fetchRecommended() {
      setLoading(true)
      // get recommended
      const recommendedUserUUIDS = await getRecommendedUsers()

      // generate request array
      const promises = recommendedUserUUIDS.data.map((user) => {
        return getUserPromise(user.recommendation, "/user/profile/")
      })
      const recommendedUserList = await axios.all(promises)

      setRecommendedList(
        recommendedUserList.map((user) => {
          return user.data
        })
      )

      setLoading(false)
    }
    fetchRecommended()
  }, [setRecommendedList, setLoading])

  const setVisible = (v) => {
    setShowCreateCommunityModal(v)
  }

  const handleSelectChange = (v) => {
    setSearchType(v)
    setSearchResults(null)
    setNoResults(false)
  }

  const updateRedirect = (newUCID) => {
    setUcid(newUCID)
    setRedirect(true)
  }
  if (redirect) {
    return <Redirect to={`/community/${ucid}`} />
  }
  return (
    <div className="background">
      <div className="page-body">
        <Title size={1}>Search</Title>
        <div className="search-bar-container">
          <Select
            className="search-type-input"
            defaultValue="user"
            size="large"
            onChange={handleSelectChange}
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
            onSearch={(searchQuery) =>
              handleSearch(searchQuery, searchType, setSearchResults, setLoading, setNoResults)
            }
          />
        </div>
        <div className="search-results-container">
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {noResults === true && (
                <Text>We couldn&apos;t find any results for your search, maybe you mistyped?</Text>
              )}
              {searchResults === null && recommendedList !== null && (
                <div>
                  <Text size="large" strong>
                    Here are some recommended Profiles!
                  </Text>
                  <div>
                    <UserList userList={recommendedList} />
                  </div>
                </div>
              )}
              {searchResults !== null && noResults === true && searchType === "community" && (
                <div>
                  <br />
                  <Text> Or, </Text>
                  <Button type="link" onClick={() => setVisible(true)}>
                    Create a community
                  </Button>
                  <Text> if it doesn&apos;t exist! </Text>
                </div>
              )}
              {searchResults != null &&
                searchType === "user" &&
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
                        : "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                    }
                  />
                ))}

              {searchResults != null &&
                searchType === "community" &&
                searchResults.data.map((community) => (
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
                ))}
            </>
          )}
        </div>
      </div>
      <CreateCommunityModal
        isVisible={showCreateCommunityModal}
        setVisible={setVisible}
        updateRedirect={updateRedirect}
      />
    </div>
  )
}

export default SearchPage
