import React, { Component } from 'react'

import { AppContext } from '../../context/AppContext'

class Page extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {appContext => {
          const { page } = appContext
          const { name, children } = this.props

          if (page === name) {
            return <div>{children}</div>
          }

          return null
        }}
      </AppContext.Consumer>
    )
  }
}

export default Page
