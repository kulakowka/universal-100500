import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from 'containers/Layout/Layout.jsx'
import Index from 'containers/Index/Index.jsx'
import About from 'containers/About/About.jsx'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index} />
    <Route path="/about" component={About} />
  </Route>
)
