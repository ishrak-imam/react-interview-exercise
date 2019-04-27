import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './FriendListItem.css'

class FriendListItem extends Component {
  render () {
    const { id, name, starred, gender } = this.props.friend

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{name}</span></div>
          <div>
            {/* <small>xx friends in common</small> */}
            <i className={classnames('fa', {
              'fa-female': gender === 'F',
              'fa-male': gender === 'M'
            })} />
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deleteFriend(id)}>
            <i className='fa fa-trash' />
          </button>
        </div>
      </li>
    )
  }
}

FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
  starFriend: PropTypes.func.isRequired
}

export default FriendListItem
