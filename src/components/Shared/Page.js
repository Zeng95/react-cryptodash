import React, { Component } from 'react'
import { AppContext } from '../../context/AppContext'

const { Consumer } = AppContext

class Page extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { page } = value
          const { name, children } = this.props

          if (page === name) {
            return <div className="content">{children}</div>
          }

          return null
        }}
      </Consumer>
    )
  }
}

export default Page
