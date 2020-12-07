import React from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, Checkbox, Typography, Modal } from "antd"
import "antd/dist/antd.css"
// eslint-disable-next-line import/no-extraneous-dependencies

function handleCreate(setVisible) {
  setVisible(false)
}

function handleCancel(setVisible) {
  setVisible(false)
}

function CreateCommunityModal(props) {
  const { isVisible, setVisible } = props
  return (
    <Modal
      title="Basic Modal"
      visible={isVisible}
      onOk={() => handleCreate(setVisible)}
      onCancel={() => handleCancel(setVisible)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}
CreateCommunityModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
}

export default CreateCommunityModal
/*
<Modal
    title="Basic Modal"
    visible={showCreateCommunityModal}
    onOk={this.handleSuccessCreateCommunityModal}
    onCancel={this.handleCancelCreateCommunityModal}
>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</Modal>
*/
/*
function LogInForm() {
  const onFinish = (values) => {
    // eslint-disable-next-line no-console
    console.log("Received values of form: ", values)
  }
  return (
    <div className="log-in-panel">
      <Title size={2} style={{ paddingBottom: "20px" }}>
        Log In
      </Title>
      <Form name="normal_login" onFinish={onFinish} layout="vertical">
        <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="forgot">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <br /> Or <a href="register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}
*/
