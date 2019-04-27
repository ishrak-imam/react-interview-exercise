import React, { Component } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import FriendListApp from './FriendListApp'
import * as reducers from '../reducers'

const logger = store => next => action => {
  const result = next(action)
  console.groupCollapsed('%c ACTION', 'color: grey  ', action.type)
  console.log('%c DISPATCH   :: ', 'color: green', action)
  console.log('%c NXTSTATE   :: ', 'color: green', store.getState())
  console.groupEnd()
  return result
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(logger))

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
