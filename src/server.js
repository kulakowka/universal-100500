import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import jade from 'pug'
import Helmet from 'react-helmet'

import manifest from '../dist/manifest.json'
import routes from 'routes'
import * as reducers from 'reducers'
import promiseMiddleware from 'utils/middleware/promiseMiddleware'
import fetchComponentData from 'utils/fetchComponentData'


const app = express()
const host = 'localhost'
const port = 3000

const reducer = combineReducers({ ...reducers, routing: routerReducer })
const store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware))


const getMarkup = (renderProps, initialState) => {

  const App = () =>
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>

  const component = renderToString(<App />)
  const head = Helmet.rewind()
  console.log('head =', head.title.toString());
  return jade.compileFile('src/views/index.jade')({markup: component, renderProps, manifest, state: initialState, ...head})
}


app.use(express.static('./dist'));

app.use( (req, res) => {
  match({ location: req.url, routes }, (error, redirectLocation, renderProps) => {
    if (error) { console.error('Router error:', error); return res.status(500).send(error.message) }

    if (redirectLocation) { return res.redirect(302, redirectLocation.pathname + redirectLocation.search) }
    if (!renderProps) { return res.status(404).send('Not Found') }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(() => res.send( getMarkup(renderProps, store.getState()) ))

    // res.status(200).send()
  })
})

app.listen(port, error => {
  if (error) {
    console.log(error)
  } else {
    console.info(`==> 🌎  Open up http://${host}:${port}/ in your browser.`);
  }
})
