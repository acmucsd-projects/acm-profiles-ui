/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react"
import { Tabs, Divider } from "antd"
import { useParams, Link } from "react-router-dom"
import "./user-profile-page.css"
import "antd/dist/antd.css"
import UserHeader from "../components/UserHeader/UserHeader"
import ContactList from "../components/ContactList/ContactList"
import UpdateToolbar from "../components/UI/UpdateToolbar"
import UserList from "../components/UserList/UserList"
import { getUserAxios, getUUID, patchUserProfile, patchUserSocials } from "../url-wrappers"

const { TabPane } = Tabs

function UserProfilePage() {
  const { id } = useParams()
  const isMyProfile = id === getUUID()

  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)

  const [user, setUser] = useState({})
  const [databaseStateUser, setDatabaseStateUser] = useState({})
  const [contacts, setContacts] = useState({})
  const [contactsDatabaseState, setContactsDatabaseState] = useState({})

  const [followersList, setFollowersList] = useState([])
  const [followingList, setFollowingList] = useState([])

  const [followable, setFollowable] = useState(true)

  // THIS IS WHERE WE LOAD DATA FROM THE DATABASE
  useEffect(() => {
    async function fetchUserInfo() {
      // first fetch user profile information
      const userInfoResult = await getUserAxios(id, "/user/profile/")
      setDatabaseStateUser(userInfoResult.data)
      setUser(userInfoResult.data)
      // then fetch user socials
      const userSocialResult = await getUserAxios(id, "/user/profile/socials/")
      const tempobj = {}
      Object.assign(tempobj, userSocialResult.data)
      setContactsDatabaseState(tempobj)
      setContacts(userSocialResult.data)
      // then fetch followers and following lists
      const userFollowers = await getUserAxios(id, "/user/follower_list/").then()
      const userFollowing = await getUserAxios(id, "/user/following_list/")
      const currUUID = getUUID()
      setFollowable(true)
      await userFollowers.data.forEach((fo) => {
        if (fo.follower === currUUID) {
          setFollowable(false)
        }
      })
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
      setLoading(false)
    }

    fetchUserInfo()
  }, [
    setUser,
    setLoading,
    setContacts,
    setFollowersList,
    setFollowingList,
    setDatabaseStateUser,
    id,
    setFollowable,
  ])
  console.log(followable)
  // eslint-disable-next-line no-unused-vars
  // console.log(user)
  // console.log(followingList)

  const finishEditing = () => {
    setEditing(false)
    // push the new user object to API
    // remove unchanged properties
    const patchUserDifference = Object.keys(user).reduce((diff, key) => {
      if (databaseStateUser[key] === user[key]) return diff
      return {
        ...diff,
        [key]: user[key],
      }
    }, {})
    // patch changed properties
    // eslint-disable-next-line eqeqeq
    if (patchUserDifference != {}) patchUserProfile(patchUserDifference)
    console.log(contacts)
    console.log(contactsDatabaseState)
    const patchSocialDifference = Object.keys(contacts).reduce((diff, key) => {
      if (contactsDatabaseState[key] === contacts[key]) return diff
      return {
        ...diff,
        [key]: contacts[key],
      }
    }, {})
    console.log(patchSocialDifference)
    // eslint-disable-next-line eqeqeq
    if (patchSocialDifference != {}) patchUserSocials(patchSocialDifference)
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
                <Link
                  to="/community/b592e41f-918c-4cae-80f6-8b1436187891"
                  className="navigation-button"
                >
                  go to another community
                </Link>
                <UserHeader
                  user={user}
                  myProfile={isMyProfile}
                  editing={editing}
                  updateEditing={setEditing}
                  followable={followable}
                  setFollowable={setFollowable}
                  setUser={setUser}
                />
                <Divider />
                <UserProfileTabs />
              </>
            )}
          </>
        )}
      </div>
      {editing && <UpdateToolbar finishEditing={finishEditing} />}
    </div>
  )
}

export default UserProfilePage
