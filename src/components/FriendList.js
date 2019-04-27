import React, { Component, PropTypes } from 'react'
import styles from './FriendList.css'
import FriendListItem from './FriendListItem'

class FriendList extends Component {
  render () {
    return (
      <ul className={styles.friendList}>
        {
          this.props.friends.map(friend => {
            const id = friend.id
            return (
              <FriendListItem
                key={id}
                friend={friend}
                {...this.props.actions} />
            )
          })
        }
      </ul>
    )
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default FriendList
