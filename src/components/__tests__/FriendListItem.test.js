import React from 'react'
import { create } from 'react-test-renderer'
import { FriendListItem } from '../FriendListItem'

import { initialState } from '../../reducers/friendlist'

test('FriendListItem component', () => {
  const component = create(
    <FriendListItem
      friendId='1'
      deleteFriend={() => {}}
      starFriend={() => {}}
      friendlist={initialState}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
