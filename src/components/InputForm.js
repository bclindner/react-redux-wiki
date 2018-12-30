import React, { Component } from 'react'

export default class InputForm extends Component {
  keyDown = (evt) => {
    const text = evt.target.value.trim()
    if (evt.which === 13 && text !== "") { // enter key
      evt.target.value = ""
      this.props.onSave(text)
    }
  }
  render() {
    return (
      <input
        placeholder='Type a page title...'
        onKeyDown={this.keyDown}
      />
    )
  }
}
