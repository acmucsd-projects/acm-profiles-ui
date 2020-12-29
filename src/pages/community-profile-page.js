import React, { useState, useEffect } from "react"
import { Tabs, Divider } from "antd"
import "antd/dist/antd.css"
import "./community-profile-page.css"
import { useParams } from "react-router-dom"
import CommunityHeader from "../components/CommunityHeader/CommunityHeader"
import ContactList from "../components/ContactList/ContactList"
import UserList from "../components/UserList/UserList"
import UpdateToolbar from "../components/UI/UpdateToolbar"
import ChangeImageModal from "../components/UI/ChangeImageModal"

import {
  getCommunityAxios,
  getUUID,
  getCommunityMembers,
  getUserAxios,
  getCommunitySocials,
  patchCommunityProfile,
  patchCommunitySocials,
} from "../url-wrappers"

const { TabPane } = Tabs

function CommunityProfilePage() {
  // get community info
  // get community members
  // get community socials
  // patch community info
  // patch community socials
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [canEdit, setCanEdit] = useState(false)
  const [editing, setEditing] = useState(false)
  const [showImageModal, setImageModal] = useState(false)

  const [community, setCommunity] = useState({})
  const [databaseStateCommunity, setDatabaseStateCommunity] = useState({})
  const [contacts, setContacts] = useState({})
  const [contactsDatabaseState, setContactsDatabaseState] = useState({})

  const [membersList, setMembersList] = useState([])

  const [joinable, setJoinable] = useState(true)

  // THIS IS WHERE WE LOAD DATA FROM THE DATABASE
  useEffect(() => {
    async function fetchCommunityInfo() {
      // first fetch community information
      const communityInfoResult = await getCommunityAxios(id, "/community/")
      const tempcom = {}
      Object.assign(tempcom, communityInfoResult.data)
      setDatabaseStateCommunity(tempcom)
      setCommunity(communityInfoResult.data)

      // then fetch user socials
      const communitySocialResult = await getCommunitySocials(id)
      const tempsocials = {}
      Object.assign(tempsocials, communitySocialResult.data)
      setContactsDatabaseState(tempsocials)
      setContacts(communitySocialResult.data)

      // then fetch user info for each member

      // note: the path '/community/member)list/ucid'  only
      //       returns the uuids of the members, meaning we have to pull the
      //       info for each of these users individually, then fetch members list
      const commMemberList = await getCommunityMembers(id)
      const userMemberList = []
      commMemberList.data.forEach(async (member) => {
        const currMemberInfo = await getUserAxios(member.member, "/user/profile/")
        userMemberList.push(currMemberInfo.data)
      })
      setMembersList(userMemberList)

      const currUUID = getUUID()
      setJoinable(true)
      // check if the current user is in the memberlist
      await commMemberList.data.forEach((member) => {
        if (member.member === currUUID) {
          // current user exists in the memberlist
          setJoinable(false)
          if (member.admin === true) {
            setCanEdit(true)
          }
        }
      })

      setLoading(false)
    }

    fetchCommunityInfo()
  }, [
    setCommunity,
    setLoading,
    setContacts,
    setMembersList,
    setDatabaseStateCommunity,
    setCanEdit,
    setJoinable,
    id,
  ])
  // eslint-disable-next-line no-unused-vars
  // console.log(user)
  // console.log(followingList)

  const finishEditing = () => {
    setEditing(false)
    // push the new user object to API
    // remove unchanged properties
    const patchCommunityDifference = Object.keys(community).reduce((diff, key) => {
      if (databaseStateCommunity[key] === community[key]) return diff
      return {
        ...diff,
        [key]: community[key],
      }
    }, {})
    // patch changed properties
    // eslint-disable-next-line eqeqeq
    if (patchCommunityDifference != {}) patchCommunityProfile(id, patchCommunityDifference)
    // console.log(contacts)
    // console.log(contactsDatabaseState)
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
    if (patchSocialDifference != {}) patchCommunitySocials(id, patchSocialDifference)
  }

  /* TODO: get community information from backend */
  /*
  const membersList = [
    {
      uuid: 123456,
      firstName: "Joe",
      lastName: "Ma",
      major: "Computer Science",
      graduationYear: 2023,
      college: "Eighth",
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
  const [user, setUser] = useState({
    canJoin: false,
    canEdit: true,
  }) */
  /* ^^^^^^^^^ placeholder information ^^^^^^^^^^ */

  const CommunityProfileTabs = () => (
    <div className="my-centered-tab-wrapper">
      <Tabs size="large" defaultActiveKey="1">
        <TabPane tab="Contacts" key="contact">
          <div className="tab-container">
            <ContactList editing={editing} contacts={contacts} setContacts={setContacts} />
          </div>
        </TabPane>
        <TabPane tab="Members" key="members">
          <div className="tab-container">
            <UserList userList={membersList} />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
  return (
    <div className="background">
      <div className="page-body">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <CommunityHeader
              community={community}
              canEdit={canEdit}
              canJoin={joinable}
              editing={editing}
              updateEditing={setEditing}
              setCommunity={setCommunity}
              setUser={setCommunity}
              setImageModal={setImageModal}
            />
            <Divider />
            <CommunityProfileTabs />

            {editing && <UpdateToolbar finishEditing={finishEditing} />}
            <ChangeImageModal isVisible={showImageModal} setVisible={setImageModal} />
          </>
        )}
      </div>
    </div>
  )
}

export default CommunityProfilePage
