import React, { useState } from "react"
import { Tabs, Divider } from "antd"
import "antd/dist/antd.css"
import "./community-profile-page.css"
import CommunityHeader from "../components/CommunityProfile/CommunityHeader"
import ContactList from "../components/UserProfile/ContactList"
import UserList from "../components/UserProfile/UserList"
import UserUpdateToolbar from "../components/UserProfile/UserUpdateToolbar"
import ChangeImageModal from "../components/CommunityProfile/ChangeImageModal"

const { TabPane } = Tabs

function CommunityProfilePage() {
  const [editing, setEditing] = useState(false)
  const [showImageModal, setImageModal] = useState(false)
  /* TODO: get community information from backend */
  const [community, setCommunity] = useState({
    image:
      "https://cravingsbychrissyteigen.com/wp-content/uploads/2020/05/CookingWithAlcohol_Square.jpg",
    name: "ACM Cooking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  })
  const [contacts, setContacts] = useState({
    discord: "TheLegend27",
    facebook: "Mark Zuckerberg",
    instagram: "Mark Zuckerborg",
  })
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
  })
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

  const finishEditing = () => {
    setEditing(false)
  }

  return (
    <div className="background">
      <div className="page-body">
        <CommunityHeader
          community={community}
          canEdit={user.canEdit}
          canJoin={user.canJoin}
          editing={editing}
          updateEditing={setEditing}
          setCommunity={setCommunity}
          setUser={setUser}
          setImageModal={setImageModal}
        />
        <Divider />
        <CommunityProfileTabs />
      </div>
      {editing && <UserUpdateToolbar finishEditing={finishEditing} />}
      <ChangeImageModal isVisible={showImageModal} setVisible={setImageModal} />
    </div>
  )
}

export default CommunityProfilePage
