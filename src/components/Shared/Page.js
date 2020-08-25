import { AppContext } from 'context/AppContext'
import React, { Component } from 'react'

const { Consumer } = AppContext

class Page extends Component {
  render() {
    return (
      <Consumer>
        {({ page }) => {
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
