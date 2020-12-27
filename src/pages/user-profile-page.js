/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
import { Tabs, Divider } from "antd"
import { useParams } from "react-router-dom"
import "./user-profile-page.css"
import "antd/dist/antd.css"
import UserHeader from "../components/UserProfile/UserHeader"
import ContactList from "../components/UserProfile/ContactList"
import UserUpdateToolbar from "../components/UserProfile/UserUpdateToolbar"
import UserList from "../components/UserProfile/UserList"
import { getUserProfile } from "../url-wrappers"

const { TabPane } = Tabs

// const { Title } = Typography
function callback(key) {
  console.log(key)
}

function UserProfilePage() {
  const { id } = useParams()
  const userId = "123456"
  // call getUser
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZWFhNjU3MDYtNzdiZS00NGZmLWE5YTYtY2Y4YWI2MDY5NGIxIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwOTAzNDgwNCwiZXhwIjoxNjEwMjQ0NDA0fQ.Wxse7GgaB8xPmKltAEuFKugTyuMxsev6OvUyRjTj3GI"
  const testUserId = "16d9c560-fc43-4037-8690-9ca14de155d6"
  const isMyProfile = id === userId

  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)

  /* const [user, setUser] = useState({
    image:
      "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
    name: "John Doe",
    major: "Computer Science",
    year: "2nd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }) */
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchUserProfile() {
      const result = await getUserProfile(token, testUserId)

      setUser(result.data)
      setLoading(false)
    }
    fetchUserProfile()
  }, [setUser, setLoading])

  // eslint-disable-next-line no-unused-vars
  console.log(user)
  const [contacts, setContacts] = useState({
    discord: "TheLegend27",
    facebook: "Mark Zuckerberg",
    instagram: "Mark Zuckerborg",
  })

  const followersList = [
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

  const followingList = [
    {
      uuid: 232341,
      firstName: "John",
      lastName: "Doe",
      major: "Computer Science",
      graduationYear: 2023,
      college: "Sixth",
      profileImageURL:
        "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
    },
    {
      uuid: 129410,
      firstName: "Joe",
      lastName: "Smith",
      major: "Biology",
      graduationYear: 2024,
      college: "Marshall",
      profileImageURL:
        "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
    },
  ]

  const finishEditing = () => {
    setEditing(false)
    // push the new user object to API
  }
  const UserProfileTabs = () => (
    <div className="my-centered-tab-wrapper">
      <Tabs size="large" defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Contacts" key="contact">
          <div className="tab-container">
            <ContactList editing={editing} contacts={contacts} setContacts={setContacts} />
          </div>
        </TabPane>
        <TabPane tab="Followers" key="followers">
          <div className="tab-container">
            <UserList userList={followersList} />
          </div>
        </TabPane>
        <TabPane tab="Following" key="following">
          <div className="tab-container">
            <UserList userList={followingList} />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )

  return (
    <div className="background">
      <div className="page-body">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {user.uuid == null ? (
              <p> user not found </p>
            ) : (
              <>
                <UserHeader
                  user={user}
                  myProfile={isMyProfile}
                  editing={editing}
                  updateEditing={setEditing}
                  followable={false}
                  setUser={setUser}
                />
                <Divider />
                <UserProfileTabs />
              </>
            )}
          </>
        )}
      </div>
      {editing && <UserUpdateToolbar finishEditing={finishEditing} />}
    </div>
  )
}

export default UserProfilePage
