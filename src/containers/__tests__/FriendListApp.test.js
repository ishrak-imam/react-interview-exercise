import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { FriendListApp } from '../FriendListApp'

import { initialState } from '../../reducers/friendlist'

test('FriendListApp component', () => {
  const renderer = new ShallowRenderer()
  const component = renderer.render(
    <FriendListApp
      addFriend={() => {}}
      goToPage={() => {}}
      friendlist={initialState}
    />
  )
  expect(component).toMatchSnapshot()
})
