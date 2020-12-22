/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unused-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { Button } from "antd"
import ContactCard from "./ContactCard"
import "./ContactList.css"

function ContactList(props) {
  // Required props: contacts (currently placeholder), editable

  const editing = props.editing
  const contacts = props.contacts
  const setContacts = props.setContacts

  const updateSocial = (key, newSocial) => {
    // eslint-disable-next-line prefer-template
    console.log("updating social: " + key + " to " + newSocial)
    setContacts({ ...contacts, [key]: newSocial })
  }
  const deleteSocial = (key) => {
    // eslint-disable-next-line prefer-template
    console.log("deleting social: " + key)
    const updatedArr = {}
    Object.assign(updatedArr, contacts)
    delete updatedArr[key]
    setContacts(updatedArr)
  }
  const contactsArr = []
  Object.entries(contacts).forEach(([key, value]) => {
    contactsArr.push(
      <ContactCard
        key={key}
        type={key}
        name={value}
        editable={editing}
        updateSocial={(k, s) => updateSocial(k, s)}
        deleteSocial={(k) => deleteSocial(k)}
      />
    )
  })
  return (
    <div className="contact-list-container">
      <div className="contact-list-contacts-container">{contactsArr}</div>
      {editing && (
        <div className="contact-list-edit-button-container">
          <Button className="contact-list-edit-button" type="primary">
            Add Contact
          </Button>
        </div>
      )}
    </div>
  )
}

ContactList.propTypes = {
  editable: PropTypes.bool.isRequired,
}

export default ContactList
