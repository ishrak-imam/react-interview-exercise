import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './AddFriendInput.css'

class AddFriendInput extends Component {
  render () {
    const { name, gender } = this.state
    return (
      <div>
        <input
          type='text'
          autoFocus='true'
          className={classnames('form-control', styles.addFriendInput)}
          placeholder='Type the name of a friend'
          value={name}
          onChange={this.handleChange}
          // onKeyDown={this.handleSubmit}
        />

        <div className={`${styles.gender}`}>
          <label>
            <input onChange={this.handleRadioChange} type='radio' value='M' checked={gender === 'M'} />
            <small>Male</small>
          </label>

          <label>
            <input onChange={this.handleRadioChange} type='radio' value='F' checked={gender === 'F'} />
            Female
          </label>

          <button className={`btn btn-default ${styles.addFriend}`}
            onClick={this.handleSubmit}>
            <span>Add Friend</span>
          </button>
        </div>

      </div>
    )
  }

  constructor (props, context) {
    super(props, context)
    this.state = {
      name: this.props.name || '',
      gender: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
  }

  handleRadioChange (e) {
    this.setState({ gender: e.target.value })
  }

  handleChange (e) {
    this.setState({ name: e.target.value.trim() })
  }

  handleSubmit (e) {
    // const name = e.target.value.trim()
    // const { gender } = this.state
    // if (e.which === 13) {
    //   this.props.addFriend({ name, gender })
    //   this.setState({ name: '', gender: '' })
    // }

    const { name, gender } = this.state
    this.props.addFriend({ name, gender })
    this.setState({ name: '', gender: '' })
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
}

export default AddFriendInput
