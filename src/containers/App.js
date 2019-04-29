import React, { Component } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import FriendListApp from './FriendListApp'
import * as reducers from '../reducers'

import { changePageNumber, logger } from '../middlewares'

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(logger, changePageNumber))

export default class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    )
  }
}
