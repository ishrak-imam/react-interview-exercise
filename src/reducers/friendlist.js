import * as types from '../constants/ActionTypes'

const ITEMS_PER_PAGE = 3

const data = [
  {
    name: 'Theodore Roosevelt',
    starred: true,
    id: 0,
    gender: 'M'
  },
  {
    name: 'Abraham Lincoln',
    starred: false,
    id: 1,
    gender: 'M'
  },
  {
    name: 'George Washington',
    starred: false,
    id: 2,
    gender: 'M'
  }
]

const normalizeList = list => {
  return list.reduce((obj, item, index) => {
    obj.map[item.id] = item
    obj.ids.push(index)
    return obj
  }, { map: {}, ids: [] })
}

const chunkList = (list, size) => {
  let chunkedList = []
  const noOfChunks = Math.ceil(list.length / size)
  for (let i = 0; i < noOfChunks; i++) {
    chunkedList.push(list.slice(i * size, (i + 1) * size))
  }
  return chunkedList
}

const getPages = ids => {
  const chunkedIds = chunkList(ids, ITEMS_PER_PAGE)
  return chunkedIds.reduce((pages, chunk, index) => {
    pages[index + 1] = { ids: chunk }
    return pages
  }, {})
}

const { map, ids } = normalizeList(data)

const initialState = {
  friends: map,
  ids,
  pagination: {
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage: '1',
    pages: getPages(ids)
  }
}

export default function friends (state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      let ids = state.ids
      let friends = { ...state.friends, [ids.length]: { ...action.friend, id: ids.length } }
      ids.push(ids.length)

      return {
        ...state,
        friends,
        ids,
        pagination: {
          ...state.pagination,
          pages: getPages(ids)
        }
      }

    case types.DELETE_FRIEND:
      ids = state.ids.filter(id => id !== action.id)
      friends = Object.assign({}, state.friends)
      delete friends[action.id]

      // let { [action.id]: deleted, ...afterDelete } = friends

      return {
        ...state,
        friends,
        ids,
        pagination: {
          ...state.pagination,
          pages: getPages(ids)
        }
      }

    case types.STAR_FRIEND:
      friends = state.friends
      let friend = friends[action.id]
      return {
        ...state,
        friends: {
          ...friends,
          [action.id]: {
            ...friend,
            starred: true
          }
        }
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
