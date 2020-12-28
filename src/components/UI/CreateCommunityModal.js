import React, { useState } from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, Checkbox, Typography, Modal } from "antd"
import "antd/dist/antd.css"
import { createCommunity } from "../../url-wrappers"
// eslint-disable-next-line import/no-extraneous-dependencies
const { TextArea } = Input

async function handleCreate(
  setVisible,
  communityName,
  setCommunityName,
  communityDescription,
  setCommunityDescription,
  form,
  updateRedirect
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
  const newCommunity = await createCommunity({
    title: communityName,
    description: communityDescription,
    profile_image_link:
      "https://www.pngitem.com/pimgs/m/153-1538920_transparent-community-icon-png-white-community-icon-png.png",
    active: true,
  })
  updateRedirect(newCommunity.data.ucid)
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
  const { isVisible, setVisible, updateRedirect } = props
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
          form,
          updateRedirect
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
  updateRedirect: PropTypes.func.isRequired,
}

export default CreateCommunityModal
