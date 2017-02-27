import React, { PropTypes, Component } from 'react'
import css from './header.sass'
import { Link } from 'react-router'

import Logo from 'uikit/Icons/Logo/Logo.jsx'
import Menu from './Menu/Menu.jsx'

export default class Header extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const homePage = this.props.location.pathname === '/' ?
      <a href="/" className={css.logo}><Logo /><div className={css.siteName}>SmartKitchen</div></a>
      :
      <Link to="/" className={css.logo}><Logo /><div className={css.siteName}>SmartKitchen</div></Link>

    return (
      <div className={css.root}>
        { homePage }
        <div className={css.menu}>
          <Menu />
        </div>
      </div>
    )
  }
}
