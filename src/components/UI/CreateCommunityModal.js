import React, { useState } from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, Checkbox, Typography, Modal } from "antd"
import "antd/dist/antd.css"
// eslint-disable-next-line import/no-extraneous-dependencies
const { TextArea } = Input

function handleCreate(
  setVisible,
  communityName,
  setCommunityName,
  communityDescription,
  setCommunityDescription,
  form
) {
  // THIS IS WHERE WE CALL THE API AND CREATE THE NEW COMMUNITY
  // eslint-disable-next-line no-console
  console.log(
    `Creating new community with name: ${communityName}, and description: ${communityDescription}`
  )
  // reset state variables
  setCommunityName("")
  setCommunityDescription("")
  setVisible(false)
  form.resetFields()
}

function handleCancel(setVisible, setCommunityName, setCommunityDescription, form) {
  // reset state variables
  setCommunityName("")
  setCommunityDescription("")
  setVisible(false)
  form.resetFields()
}

function CreateCommunityModal(props) {
  const [communityName, setCommunityName] = useState("")
  const [communityDescription, setCommunityDescription] = useState("")
  const { isVisible, setVisible } = props
  const [form] = Form.useForm()

  return (
    <Modal
      title="Make a Community"
      visible={isVisible}
      onOk={() =>
        handleCreate(
          setVisible,
          communityName,
          setCommunityName,
          communityDescription,
          setCommunityDescription,
          form
        )
      }
      onCancel={() => handleCancel(setVisible, setCommunityName, setCommunityDescription, form)}
    >
      <Form name="create-community-form" onFinish={() => {}} layout="vertical" form={form}>
        <Form.Item
          name="community-name"
          rules={[{ required: true, message: "Every community needs a name!" }]}
        >
          <Input
            placeholder="Community Name"
            onChange={({ target: { value } }) => setCommunityName(value)}
          />
        </Form.Item>
        <Form.Item name="community-description" rules={[{ required: false }]}>
          <TextArea
            placeholder="Description"
            onChange={({ target: { value } }) => setCommunityDescription(value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
CreateCommunityModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
}

export default CreateCommunityModal
