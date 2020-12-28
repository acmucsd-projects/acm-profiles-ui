/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from "react"
import "./log-in-page.css"
import { Form, Input, Button, Typography, notification } from "antd"
import "antd/dist/antd.css"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { userLogIn } from "../url-wrappers"

const { Title } = Typography

function LogInForm(props) {
  const setAuthenticated = props.setAuthenticated
  const openErrorNotification = () => {
    notification.error({
      message: "Log In Failed",
      description:
        "The information you entered didn't match any account in our systems. Try reentering your account info.",
    })
  }
  const onFinish = async (values) => {
    // call log in
    const loginResponse = await userLogIn(values.email, values.password)
    if (loginResponse.status >= 200 && loginResponse.status < 300) {
      setAuthenticated(true)
      // good info, good response
    } else {
      // error
      openErrorNotification()
    }
  }
  const onFinishFailed = () => {
    // console.log("Failed:", errorInfo)
  }

  return (
    <div className="log-in-panel">
      <Title size={2} style={{ paddingBottom: "20px" }}>
        Log In
      </Title>
      <Form
        name="normal_login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="forgot">
            Forgot password
          </a>
          <br /> Or <br /> <a href="register">register now on the portal!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

function LogInPage(props) {
  const setAuthenticated = props.setAuthenticated
  return (
    <div className="log-in-body">
      <div className="spacer15vw" />
      <LogInForm setAuthenticated={setAuthenticated} />
    </div>
  )
}

export default LogInPage
