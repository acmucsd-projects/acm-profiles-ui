import React from "react"
import { Tabs, Divider } from "antd"
import "./user-profile-page.css"
import "antd/dist/antd.css"
import UserHeader from "../components/UserProfile/UserHeader"
import ContactList from "../components/UserProfile/ContactList"

const { TabPane } = Tabs

// const { Title } = Typography
function callback(key) {
  console.log(key)
}
const UserProfileTabs = () => (
  <Tabs size="large" defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Contacts" key="contact">
      <ContactList editable />
    </TabPane>
    <TabPane tab="Groups" key="groups">
      Groups Pane
    </TabPane>
  </Tabs>
)
function UserProfilePage() {
  return (
    <div className="background">
      <div className="page-body">
        <UserHeader editable followable={false} />

        <Divider />
        <UserProfileTabs />
      </div>
    </div>
  )
}

export default UserProfilePage
