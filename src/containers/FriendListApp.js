import React, { Component } from 'react'
import styles from './FriendListApp.css'
import { connect } from 'react-redux'

import { addFriend, goToPage } from '../actions/FriendsActions'
import { FriendList, AddFriendInput, Pagination } from '../components'

export class FriendListApp extends Component {
  constructor (props) {
    super(props)

    this.goToPage = this.goToPage.bind(this)
  }

  goToPage (page) {
    this.props.goToPage(page)
  }

  render () {
    const {
      friendlist: {
        ids,
        pagination: { currentPage, pages }
      },
      addFriend
    } = this.props

    const page = pages[currentPage]
    const pageNumbers = Object.keys(pages)

    let friendIds = ids
    if (page) friendIds = page.ids

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={addFriend} />
        <FriendList friendIds={friendIds} />
        {
          page && ids.length > 2 &&
          <Pagination currentPage={currentPage} pages={pageNumbers} goToPage={this.goToPage} />
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
  goToPage
})(FriendListApp)
