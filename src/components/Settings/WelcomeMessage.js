import React, { Component } from 'react'

import { AppContext } from '../../context/AppContext'

class Welcome extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {appContext => {
          const { firstVisit } = appContext

          return firstVisit ? (
            <div>
              Welcome to CryptoDash, please select your favorite coins to begin.
            </div>
          ) : null
        }}
      </AppContext.Consumer>
    )
  }
}

export default Welcome
