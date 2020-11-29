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

    Object.entries(members).forEach((arr) => {
      membersArr.push(
        <Member
          firstName={arr[1][0]}
          lastName={arr[1][1]}
          major={arr[1][2]}
          graduationYear={arr[1][3]}
          college={arr[1][4]}
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
