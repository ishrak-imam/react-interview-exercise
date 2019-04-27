import * as types from '../constants/ActionTypes'

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      id: 1,
      gender: 'M'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      id: 2,
      gender: 'M'
    },
    {
      name: 'George Washington',
      starred: false,
      id: 3,
      gender: 'M'
    }
  ],
  pagination: {
    pagingEnabled: false,
    chunk: 3,
    currentPage: 1,
    numberOfPages: 1
  }
}

export default function friends (state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      let friendsById = [...state.friendsById, { ...action.friend, id: state.friendsById.length + 1 }]
      return {
        ...state,
        friendsById,
        pagination: {
          ...state.pagination,
          pagingEnabled: friendsById.length > state.pagination.chunk,
          numberOfPages: Math.ceil(friendsById.length / state.pagination.chunk)
        }
      }
    case types.DELETE_FRIEND:
      friendsById = state.friendsById.filter(item => item.id !== action.id)
      return {
        ...state,
        friendsById,
        pagination: {
          ...state.pagination,
          pagingEnabled: friendsById.length > state.pagination.chunk,
          numberOfPages: Math.ceil(friendsById.length / state.pagination.chunk)
        }
      }
    case types.STAR_FRIEND:
      let friends = [...state.friendsById]
      let friend = friends.find(item => item.id === action.id)
      friend.starred = !friend.starred
      return {
        ...state,
        friendsById: friends
      }

    case types.GO_TO_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.page
        }
      }

    default:
      return state
  }
}
