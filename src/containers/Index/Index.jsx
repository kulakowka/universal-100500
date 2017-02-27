import React, { PropTypes, Component } from 'react'
import css from './index.sass'
import Helmet from 'react-helmet'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as indexActions from 'actions/indexActions'

class Index extends Component {
  static propTypes = {
    actions: PropTypes.object,
    items: PropTypes.array
  }

  static serverFetch = [
    indexActions.fetchList
  ]

  constructor(props) {
    super(props)

    this.changeHandler = this.changeHandler.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    console.log('debugger');
    debugger

    if (!this.props.items.length) {
      this.props.actions.fetchList()
    }
  }

  changeHandler(e) {
    this.setState({count: e.target.value.trim()})
  }

  fetchData() {
    this.props.actions.fetchList(this.state.count)
  }

  render() {
    const { items } = this.props

    return (
      <div className={css.root}>
        { items &&
          <Helmet
            title="hello, World!"
          />
        }
        { items &&
          this.props.items.map( item =>
            <div key={item.id}>
              <span>{item.name}</span>
              <span>&nbsp;–&nbsp;</span>
              <span>{item.email}</span>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.indexReducer }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(indexActions, dispatch) }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Index)
export default connect(mapStateToProps, mapDispatchToProps)(Index)
