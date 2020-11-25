import React from "react"
import PropTypes from "prop-types"
import { Typography } from "antd"
import "./ContactCard.css"

const { Title } = Typography

function ContactCard(props) {
  // Required props: type, name
  const { type, name } = props
  const typeText = `${type.charAt(0).toUpperCase() + type.slice(1)}:`
  let imageUrl = null

  switch (type) {
    case "discord":
      imageUrl = "https://www.flaticon.com/svg/static/icons/svg/2111/2111370.svg"
      break
    case "facebook":
      imageUrl = "https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"
      break
    case "instagram":
      imageUrl = "https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg"
      break
    case "linkedin":
      imageUrl = null
      break
    default:
      break
  }

  return (
    <div className="contact-card-container">
      <div className="contact-service-container">
        <div className="contact-image-container">
          <img className="contact-card-type-image" src={imageUrl} alt="" />
        </div>
        <div className="contact-title-container">
          <Title level={3}>{typeText}</Title>
        </div>
      </div>
      <div className="contact-subtitle-container">
        <Title className="contact-name" level={4}>
          {name}
        </Title>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ContactCard
