import React, { Component } from 'react'
import styles from './FriendListApp.css'
import { connect } from 'react-redux'

import { addFriend, deleteFriend, starFriend, goToPage } from '../actions/FriendsActions'
import { FriendList, AddFriendInput, Pagination } from '../components'

class FriendListApp extends Component {
  constructor (props) {
    super(props)

    this.goToPage = this.goToPage.bind(this)
  }

  goToPage (page) {
    this.props.goToPage(page)
  }

  render () {
    const { friendlist: { friendsById, pagination } } = this.props

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    }

    let friendList = friendsById
    if (pagination.pagingEnabled) {
      const chunk = pagination.chunk
      const currentPage = pagination.currentPage
      friendList = friendList.slice((currentPage - 1) * chunk, chunk * currentPage)
    }

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendList} actions={actions} />
        {
          pagination.pagingEnabled &&
          <Pagination pagination={pagination} goToPage={this.goToPage} />
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  goToPage
})(FriendListApp)
