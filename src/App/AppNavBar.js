import React, { Component } from 'react'
import styled from 'styled-components'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`

class AppNavBar extends Component {
  render() {
    return (
      <AppNavBarStyled>
        <div>CryptoDash</div>
        <div className="text-transparent">Space Remaining</div>
        <div>Dashboard</div>
        <div>Settings</div>
      </AppNavBarStyled>
    )
  }
}

export default AppNavBar
