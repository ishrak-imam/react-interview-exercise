import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './FriendListItem.css'
import { connect } from 'react-redux'

class FriendListItem extends Component {
  render () {
    const { friendId, friendlist: { friends } } = this.props
    const { name, gender, id, starred } = friends[friendId]

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
  friendId: PropTypes.string.isRequired,
  starFriend: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, null)(FriendListItem)
