import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button } from "antd"
import ContactCard from "./ContactCard"
import "./ContactList.css"

class ContactList extends Component {
  // Required props: contacts (currently placeholder), editable
  constructor(props) {
    super(props)

    this.state = {
      /* vvv placeholder information vvv */
      contacts: {
        discord: "TheLegend27",
        facebook: "Mark Zuckerberg",
        instagram: "Mark Zuckerborg",
      },
      /* ^^^ placeholder information ^^^ */
      editable: props.editable,
    }
  }

  render() {
    const { contacts, editable } = this.state /* TODO: pass contacts through props */
    const contactsArr = []

    Object.entries(contacts).forEach(([key, value]) => {
      contactsArr.push(<ContactCard type={key} name={value} />)
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
}

ContactList.propTypes = {
  editable: PropTypes.bool.isRequired,
}

export default ContactList
