import React, { PropTypes, Component } from 'react'
import css from './menu.sass'

import { Link } from 'react-router'

export default class Menu extends Component {

  static propTypes = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={css.root}>
        <Link className={css.item} to="/about">О проекте</Link>
        <Link className={css.item} to="/contacts">Контакты</Link>
      </div>
    )
  }
}
