/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, Select, Typography, Modal } from "antd"
import "antd/dist/antd.css"
// eslint-disable-next-line import/no-extraneous-dependencies
const { Option } = Select

function handleCreate(
  setVisible,
  contactName,
  setContactName,
  contactKey,
  setContactKey,
  form,
  contactList,
  setContactList
) {
  // THIS IS WHERE WE CALL THE API AND CREATE THE NEW COMMUNITY
  // eslint-disable-next-line no-console
  // console.log(`Creating new contact with name: ${contactName}, and type: ${contactKey}`)
  // reset state variables
  if (contactKey === "") {
    setContactName("")
    setContactKey("")
    setVisible(false)
    form.resetFields()
    return
  }

  // eslint-disable-next-line no-param-reassign
  contactList[contactKey] = contactName
  setContactName("")
  setContactKey("")
  setVisible(false)
  form.resetFields()
  setContactList(contactList)
}

function handleCancel(setVisible, setContactName, setContactKey, form) {
  // reset state variables
  setContactName("")
  setContactKey("")
  setVisible(false)
  form.resetFields()
}

function AddContactModal(props) {
  const [contactName, setContactName] = useState("")
  const [contactKey, setContactKey] = useState("")
  const { isVisible, setVisible, contactList, setContactList } = props
  const [form] = Form.useForm()
  const onSocialKeyChange = (value) => {
    setContactKey(value)
  }
  const OPTIONS = ["snapchat", "instagram", "facebook", "github", "linkedin", "discord", "email"]
  const emptySocials = Object.keys(contactList).filter(
    (key) => OPTIONS.includes(key) && contactList[key] === null
  )
  return (
    <Modal
      title="Add a Contact"
      visible={isVisible}
      onOk={() =>
        handleCreate(
          setVisible,
          contactName,
          setContactName,
          contactKey,
          setContactKey,
          form,
          contactList,
          setContactList
        )
      }
      onCancel={() => handleCancel(setVisible, setContactName, setContactKey, form)}
    >
      <Form name="create-community-form" onFinish={() => {}} layout="vertical" form={form}>
        <Form.Item name="contact-key" label="Platform" rules={[{ required: true }]}>
          <Select placeholder="Select one" onChange={onSocialKeyChange} allowClear>
            {emptySocials.map((key) => (
              <Option key={key} value={key}>
                {key}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="contact-name" rules={[{ required: true }]}>
          <Input
            placeholder="username"
            onChange={({ target: { value } }) => setContactName(value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
AddContactModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  contactList: PropTypes.array.isRequired,
  setContactList: PropTypes.func.isRequired,
}

export default AddContactModal
