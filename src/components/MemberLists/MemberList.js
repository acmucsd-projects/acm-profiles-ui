import React, { Component } from "react"
import Member from "./Member"
import "./style.css"

// container for a list of members, used in CommunityProfile and UserProfile
class MemberList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: {
        member1: ["John", "Doe", "Undecided", "2020", "Marshall"],
      },
    }
  }

  render() {
    const { members } = this.state
    const membersArr = []

    Object.entries(members).forEach(([key, value]) => {
      membersArr.push(
        <Member
          firstName={value[0]}
          lastName={value[1]}
          major={value[2]}
          graduationYear={value[3]}
          college={value[4]}
        />
      )
    })

    return (
      <div className="member-list-container">
        <div className="member-list-members-container">{membersArr}</div>
      </div>
    )
  }
}

export default MemberList
