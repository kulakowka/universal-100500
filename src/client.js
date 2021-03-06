import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import DevTools from 'containers/DevTools/DevTools.jsx'
import * as reducers from 'reducers'
import routes from 'routes'
import thunk from 'redux-thunk'

import promiseMiddleware from 'utils/middleware/promiseMiddleware'

import 'stylesheets/global'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const enchanters = (applyMiddleware(thunk, promiseMiddleware), global.__DEV__ && DevTools.instrument())

const store = createStore(reducer, window.__INITIAL_STATE__, compose(enchanters))

delete window.__INITIAL_STATE__

const history = syncHistoryWithStore(browserHistory, store)

const Root = () =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>


render( <Root />, document.getElementById('container') )
