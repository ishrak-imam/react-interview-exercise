import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './AddFriendInput.css'

class AddFriendInput extends Component {
  render () {
    const { name, gender } = this.state
    return (
      <div>
        <input
          type='text'
          autoFocus
          className={classnames('form-control', styles.addFriendInput)}
          placeholder='Type the name of a friend'
          value={name}
          onChange={this.handleChange}
          // onKeyDown={this.handleSubmit}
        />

        <div className={`${styles.gender}`}>
          <label>
            <input onChange={this.handleGenderChange} type='radio' value='M' checked={gender === 'M'} />
            <small className={`${styles.label}`}>Male</small>
          </label>

          <label>
            <input onChange={this.handleGenderChange} type='radio' value='F' checked={gender === 'F'} />
            <small className={`${styles.label}`}>Female</small>
          </label>

          <button
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
    this.handleGenderChange = this.handleGenderChange.bind(this)
  }

  handleGenderChange (e) {
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
