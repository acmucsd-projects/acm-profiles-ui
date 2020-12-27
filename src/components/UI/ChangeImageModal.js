import React, { useState } from "react"
import PropTypes from "prop-types"
import { Form, Modal, Button, Upload } from "antd"
import { UploadOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

function handleCreate(setVisible, communityImage, setCommunityImage, form) {
  // THIS IS WHERE WE CALL THE API AND CHANGE COMMUNITY IMAGE
  // reset state variables
  setCommunityImage("")
  setVisible(false)
  form.resetFields()
}

function handleCancel(setVisible, setCommunityImage, form) {
  // reset state variables
  setVisible(false)
  setCommunityImage("")
  form.resetFields()
}

function ChangeImageModal(props) {
  const [communityImage, setCommunityImage] = useState("")
  const { isVisible, setVisible } = props
  const [form] = Form.useForm()

  return (
    <Modal
      title="Change Community Image"
      visible={isVisible}
      onOk={() => handleCreate(setVisible, communityImage, setCommunityImage, form)}
      onCancel={() => handleCancel(setVisible, setCommunityImage, form)}
    >
      <Form name="community-image-form" onFinish={() => {}} layout="vertical" form={form}>
        <Form.Item
          name="community-image"
          rules={[{ required: true, message: "Every community needs a name!" }]}
        >
          <Upload name="image" listType="picture">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}
ChangeImageModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
}

export default ChangeImageModal
