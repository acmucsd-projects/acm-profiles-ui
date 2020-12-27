/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from "react"
import { Button } from "antd"
import "./UpdateToolbar.css"

function UpdateToolbar(props) {
  const finishEditing = props.finishEditing
  return (
    <div className="toolbar-container">
      <h5 className="text-color">You are in edit mode</h5>
      <Button className="done-button" type="link" onClick={finishEditing}>
        Done
      </Button>
    </div>
  )
}
export default UpdateToolbar
