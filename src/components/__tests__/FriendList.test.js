import React from 'react'
import { create } from 'react-test-renderer'
import FriendList from '../FriendList'

test('FriendList component', () => {
  const component = create(
    <FriendList friendIds={[]} deleteFriend={() => {}} starFriend={() => {}} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
