import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './FriendList.css'
import FriendListItem from './FriendListItem'

class FriendList extends Component {
  render () {
    return (
      <ul className={styles.friendList}>
        {
          this.props.friendIds.map(id => {
            return (
              <FriendListItem
                key={id}
                friendId={id}
                {...this.props.actions} />
            )
          })
        }
      </ul>
    )
  }
}

FriendList.propTypes = {
  friendIds: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default FriendList
