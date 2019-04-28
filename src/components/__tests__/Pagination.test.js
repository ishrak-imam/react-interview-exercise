import React from 'react'
import { create } from 'react-test-renderer'
import Pagination from '../Pagination'

test('Pagination component', () => {
  const component = create(
    <Pagination pages={[]} currentPage='' />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
