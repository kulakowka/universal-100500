import React, { PropTypes, Component } from 'react'
import DevTools from 'containers/DevTools/DevTools.jsx'
import css from './layout.sass'

import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.root}>
        <div className={css.container}>
          <Header { ...this.props } />
          <div className={css.content}>
            { this.props.children }
          </div>
        </div>
        <div className={css.footer}>
          <Footer />
        </div>
        <DevTools />
      </div>
    )
  }
}
