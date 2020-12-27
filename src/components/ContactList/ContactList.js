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
    setContacts({ ...contacts, [key]: newSocial })
  }
  const deleteSocial = (key) => {
    // eslint-disable-next-line prefer-template
    const updatedArr = {}
    Object.assign(updatedArr, contacts)
    updatedArr[key] = null
    setContacts(updatedArr)
  }
  const contactsArr = []
  // console.log(contacts)
  Object.entries(contacts).forEach(([key, value]) => {
    if (key !== "user" && value !== null)
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
      <div className="contact-list-contacts-container">
        {contactsArr.length ? contactsArr : <ContactCard key="empty-contact" />}
      </div>
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