import React, { Component } from 'react'

import { AppContext } from '../../context/AppContext'

class Welcome extends Component {
  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {(value) => {
          const { firstVisit } = value

          return firstVisit ? (
            <div>
              Welcome to CryptoDash, please select your favorite coins to begin.
            </div>
          ) : null
        }}
      </Consumer>
    )
  }
}

export default Welcome
