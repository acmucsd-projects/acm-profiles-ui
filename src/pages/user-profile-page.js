/* eslint-disable no-console */
import React, { useState } from "react"
import { Tabs, Divider } from "antd"
import "./user-profile-page.css"
import "antd/dist/antd.css"
import UserHeader from "../components/UserProfile/UserHeader"
import ContactList from "../components/UserProfile/ContactList"
import UserUpdateToolbar from "../components/UserProfile/UserUpdateToolbar"

const { TabPane } = Tabs

// const { Title } = Typography
function callback(key) {
  console.log(key)
}

function UserProfilePage() {
  const isMyProfile = true
  const [editing, setEditing] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    image:
      "https://www.rasmussen.edu/-/media/images/blog/authors/will-erstad.jpg?h=256&w=256&la=en&hash=B22E03E9F3B26AE141E0109114059B8D54B71024",
    name: "John Doe",
    major: "Computer Science",
    year: "2nd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  })
  const finishEditing = () => {
    setEditing(false)
    // push the new user object to API
  }
  const UserProfileTabs = () => (
    <Tabs size="large" defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Contacts" key="contact">
        <ContactList editing={editing} />
      </TabPane>
      <TabPane tab="Groups" key="groups">
        Groups Pane
      </TabPane>
    </Tabs>
  )

  return (
    <div className="background">
      <div className="page-body">
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
      </div>
      {editing && <UserUpdateToolbar finishEditing={finishEditing} />}
    </div>
  )
}

export default UserProfilePage
