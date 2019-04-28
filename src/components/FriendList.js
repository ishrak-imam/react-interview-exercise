import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FriendList.css'
import FriendListItem from './FriendListItem'

class FriendList extends Component {
  render () {
    const { friendIds } = this.props
    return (
      <ul className={styles.friendList}>
        {friendIds.map(id => {
          return (
            <FriendListItem key={id} friendId={id} />
          )
        })}
      </ul>
    )
  }
}

FriendList.propTypes = {
  friendIds: PropTypes.array.isRequired
}

export default FriendList
