import React from "react"
import PropTypes from "prop-types"
import { Typography, Button } from "antd"
import "./ContactCard.css"
import { DeleteOutlined } from "@ant-design/icons"

const { Title } = Typography
function ContactCard(props) {
  // Required props: type, name
  const { type, name, editable, updateSocial, deleteSocial } = props
  const typeText = type ? `${type.charAt(0).toUpperCase() + type.slice(1)}:` : "No Contacts"
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
  const handleDeleteSocial = () => {
    deleteSocial(type)
  }
  const change = (s) => {
    updateSocial(type, s)
  }
  return (
    <div className="contact-card-container">
      <div className="contact-service-container">
        <div className="contact-image-container">
          {imageUrl ? <img className="contact-card-type-image" src={imageUrl} alt="" /> : null}
        </div>
        <div className="contact-title-container">
          <Title level={3}>{typeText}</Title>
        </div>
      </div>
      <div className="right-hand-div">
        {editable && (
          <Title
            className="contact-name"
            level={4}
            style={{ color: "dimgray" }}
            editable={{
              editable,
              tooltip: "click to edit",
              onChange: change,
            }}
          >
            {name}
          </Title>
        )}
        {!editable && (
          <Title className="contact-name" level={4} style={{ color: "dimgray" }}>
            {name}
          </Title>
        )}

        {editable && (
          <div className="control-button-container">
            <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDeleteSocial} />
          </div>
        )}
      </div>
    </div>
  )
}

ContactCard.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  updateSocial: PropTypes.func.isRequired,
  deleteSocial: PropTypes.func.isRequired,
}

export default ContactCard
