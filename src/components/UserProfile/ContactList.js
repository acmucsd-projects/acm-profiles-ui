/* eslint-disable react/no-unused-prop-types */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "antd"
import ContactCard from "./ContactCard"
import "./ContactList.css"

function ContactList(props) {
  // Required props: contacts (currently placeholder), editable
  const [contacts, setContacts] = useState({
    discord: "TheLegend27",
    facebook: "Mark Zuckerberg",
    instagram: "Mark Zuckerborg",
  })
  const editable = { props }

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
        editable={editable}
        updateSocial={(k, s) => updateSocial(k, s)}
        deleteSocial={(k) => deleteSocial(k)}
      />
    )
  })
  return (
    <div className="contact-list-container">
      {editable ? (
        <div className="contact-list-edit-button-container">
          <Button className="contact-list-edit-button" type="primary">
            Add Contact
          </Button>
        </div>
      ) : null}
      <div className="contact-list-contacts-container">{contactsArr}</div>
    </div>
  )
}

ContactList.propTypes = {
  editable: PropTypes.bool.isRequired,
}

export default ContactList
