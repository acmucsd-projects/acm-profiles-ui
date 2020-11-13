import React from "react"
import "./log-in-page.css"
import { Form, Input, Button, Checkbox, Typography } from "antd"
import "antd/dist/antd.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined, LockOutlined } from "@ant-design/icons"

const { Title } = Typography

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

function LogInPage() {
  return (
    <div>
      <h1>Log In Page</h1>
    </div>
  )
}

export default LogInPage
