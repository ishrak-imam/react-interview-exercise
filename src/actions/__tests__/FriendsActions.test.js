
import * as actions from '../FriendsActions'
import * as types from '../../constants/ActionTypes'

describe('ADD FRIEND', () => {
  it('should create an action to add a friend', () => {
    const friend = {
      name: 'Test friend',
      gender: 'M'
    }
    const expectedAction = {
      type: types.ADD_FRIEND,
      friend
    }
    expect(actions.addFriend(friend)).toEqual(expectedAction)
  })
})

describe('DELETE FRIEND', () => {
  it('should create an action to delete a friend', () => {
    const id = '1'
    const expectedAction = {
      type: types.DELETE_FRIEND,
      id
    }
    expect(actions.deleteFriend(id)).toEqual(expectedAction)
  })
})

describe('STAR FRIEND', () => {
  it('should create an action to star a friend', () => {
    const id = '2'
    const expectedAction = {
      type: types.STAR_FRIEND,
      id
    }
    expect(actions.starFriend(id)).toEqual(expectedAction)
  })
})

describe('GO TO PAGE', () => {
  it('should create an action to navigate between pages', () => {
    const page = '3'
    const expectedAction = {
      type: types.GO_TO_PAGE,
      page
    }
    expect(actions.goToPage(page)).toEqual(expectedAction)
  })
})
