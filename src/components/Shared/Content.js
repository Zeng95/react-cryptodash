import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'

class Content extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ prices, firstVisit }) => {
          return (
            <SettingsContext.Consumer>
              {({ coins }) => {
                if (!coins) {
                  return <div>Loading Coins...</div>
                }

                if (!firstVisit && prices.length === 0) {
                  return <div>Loading Prices...</div>
                }

                return this.props.children
              }}
            </SettingsContext.Consumer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Content
