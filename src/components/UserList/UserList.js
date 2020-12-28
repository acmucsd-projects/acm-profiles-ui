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
  const userCardList = userList.map((user) => (
    <UserCard
      key={user.uuid}
      uuid={user.uuid}
      firstName={user.firstName}
      lastName={user.lastName}
      major={user.major}
      graduationYear={user.graduationYear}
      college={user.college}
      profileImageURL={user.profileImageURL}
    />
  ))
  return <div>{userCardList}</div>
}

UserList.propTypes = {
  userList: PropTypes.instanceOf(Array).isRequired,
}

export default UserList
