import React, { Component } from 'react'
import { AppContext } from '../../context/AppContext'

class Content extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {appContext => {
          const { coinList } = appContext

          if (coinList.length === 0) {
            return <div>Loading Coins</div>
          }

          return this.props.children
        }}
      </AppContext.Consumer>
    )
  }
}

export default Content
