/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
import { Tabs, Divider } from "antd"
import { useParams, Link } from "react-router-dom"
import "./user-profile-page.css"
import "antd/dist/antd.css"
import UserHeader from "../components/UserProfile/UserHeader"
import ContactList from "../components/UserProfile/ContactList"
import UserUpdateToolbar from "../components/UserProfile/UserUpdateToolbar"
import UserList from "../components/UserProfile/UserList"
import { getUserAxios, getUUID } from "../url-wrappers"

const { TabPane } = Tabs

// const { Title } = Typography

function UserProfilePage() {
  const { id } = useParams()
  // call getUser
  const isMyProfile = id === getUUID()

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
  const [contacts, setContacts] = useState({})

  const [followersList, setFollowersList] = useState([])
  const [followingList, setFollowingList] = useState([])

  useEffect(() => {
    async function fetchUserInfo() {
      // first fetch user profile information
      const userInfoResult = await getUserAxios(id, "/user/profile/")
      setUser(userInfoResult.data)
      // then fetch user socials
      const userSocialResult = await getUserAxios(id, "/user/profile/socials/")

      setContacts(userSocialResult.data)
      // then fetch followers and following lists
      const userFollowers = await getUserAxios(id, "/user/follower_list/")
      const userFollowing = await getUserAxios(id, "/user/following_list/")
      // then fetch user info for each follower and following

      // note: the paths '/user/follower_list/uuid' and '/user/following_list/uuid' only
      //       return the uuids of the followers/following, meaning we have to pull the
      //       info for each of these users individually

      const userFollowersList = []
      userFollowers.data.forEach(async (follower) => {
        const currentFollowerInfo = await getUserAxios(follower.follower, "/user/profile/")
        userFollowersList.push(currentFollowerInfo.data)
      })

      const userFollowingList = []
      userFollowing.data.forEach(async (following) => {
        const currentFollowingInfo = await getUserAxios(following.following, "/user/profile/")
        userFollowingList.push(currentFollowingInfo.data)
      })

      setFollowersList(userFollowersList)
      setFollowingList(userFollowingList)
    }

    fetchUserInfo()

    setLoading(false)
  }, [setUser, setLoading, setContacts, setFollowersList, setFollowingList, id])

  // eslint-disable-next-line no-unused-vars
  console.log(user)
  console.log(followingList)

  /* const followersList = [
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
  ] */

  const finishEditing = () => {
    setEditing(false)
    // push the new user object to API
  }
  const UserProfileTabs = () => (
    <div className="my-centered-tab-wrapper">
      <Tabs size="large" defaultActiveKey="1">
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
                <Link to="/16d9c560-fc43-4037-8690-9ca14de155d6" className="navigation-button">
                  go to another profile
                </Link>
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
