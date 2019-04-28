import React from 'react'
import { create } from 'react-test-renderer'
import AddFriendInput from '../AddFriendInput'
import FriendList from '../FriendList'

test('AddFriendInput component', () => {
  const component = create(
    <AddFriendInput addFriend={() => {}} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
