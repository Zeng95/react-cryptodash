import React, { Component } from 'react'

import { AppContext } from '../../context/AppContext'

class Page extends Component {
  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {appContext => {
          const { page } = appContext
          const { name, children } = this.props

          if (page === name) {
            return <div>{children}</div>
          }

          return null
        }}
      </Consumer>
    )
  }
}

export default Page
