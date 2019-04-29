import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './FriendListItem.css'
import { connect } from 'react-redux'

import { deleteFriend, starFriend, changePageNumber } from '../actions/FriendsActions'

export class FriendListItem extends Component {
  constructor (props) {
    super(props)
    this.deleteFriend = this.deleteFriend.bind(this)
    this.starFriend = this.starFriend.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    let { friendId, friendlist } = this.props
    const friend = friendlist.friends[friendId]
    const thisStarred = friend.starred

    const nextFriendList = nextProps.friendlist
    const nextFriend = nextFriendList.friends[friendId]
    const nextStarred = nextFriend.starred

    return thisStarred !== nextStarred
  }

  deleteFriend (id) {
    return () => {
      this.props.deleteFriend(id)
      this.props.changePageNumber()
    }
  }

  starFriend (id) {
    return () => this.props.starFriend(id)
  }

  render () {
    const { friendId, friendlist: { friends } } = this.props
    const { name, gender, id, starred } = friends[friendId]

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{name}</span></div>
          <div>
            {/* <small>xx friends in common</small> */}
            <i className={classnames(`fa ${styles.genderIcon}`, {
              'fa-female': gender === 'F',
              'fa-male': gender === 'M'
            })} />
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={this.starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={this.deleteFriend(id)}>
            <i className='fa fa-trash' />
          </button>
        </div>
      </li>
    )
  }
}

FriendListItem.propTypes = {
  friendId: PropTypes.string.isRequired,
  deleteFriend: PropTypes.func.isRequired,
  starFriend: PropTypes.func.isRequired,
  changePageNumber: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, {
  deleteFriend,
  starFriend,
  changePageNumber
})(FriendListItem)
