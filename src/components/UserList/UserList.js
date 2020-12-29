/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unused-prop-types */
import React from "react"
import PropTypes from "prop-types"
import UserCard from "./UserCard"
import "./UserList.css"

function UserList(props) {
  // Required props: userList

  const userList = props.userList
  const userCardList = userList.map((user) => {
    const major = user.major != null ? user.major : "Undecided"
    const college = user.college != null ? user.college : "Undeclared"
    const imagesrc =
      user.profile_pic != null
        ? user.profile_pic
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
    return (
      <UserCard
        key={user.uuid}
        uuid={user.uuid}
        admin={user.admin === undefined ? false : user.admin}
        firstName={user.first_name}
        lastName={user.last_name}
        major={major}
        graduationYear={user.grad_year}
        college={college}
        profileImageURL={imagesrc}
      />
    )
  })
  return <div>{userCardList}</div>
}

UserList.propTypes = {
  userList: PropTypes.instanceOf(Array).isRequired,
}

export default UserList
