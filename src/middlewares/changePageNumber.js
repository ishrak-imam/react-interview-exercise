
import { CHANGE_PAGE_NUMBER } from '../constants/ActionTypes'
import { goToPage } from '../actions/FriendsActions'

const chnagePageNumber = store => next => action => {
  if (action.type === CHANGE_PAGE_NUMBER) {
    const state = store.getState()
    const { pagination } = state.friendlist
    const { currentPage, pages } = pagination
    const page = pages[currentPage]
    if (!page && (currentPage - 1) > 0) {
      store.dispatch(goToPage(String(currentPage - 1)))
    }
  }
  next(action)
}

export default chnagePageNumber
