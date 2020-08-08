import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { AppContext } from '../../context/AppContext'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`
const Logo = styled.h1`
  margin: 0;
  font-size: 1.5em;
`
const ControlButtonElem = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  color: white;

  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 20px #03ff03;
    `}

  &:focus {
    outline: none;
  }
`

// Extend another class
class ControlButton extends Component {
  capitalize(str) {
    // 首字母大写，其余字母小写
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }

  render() {
    const { Consumer } = AppContext

    return (
      <Consumer>
        {({ page, setPage }) => {
          const { name } = this.props

          return (
            <ControlButtonElem
              active={page === name}
              onClick={() => setPage(name)}
            >
              {this.capitalize(name)}
            </ControlButtonElem>
          )
        }}
      </Consumer>
    )
  }
}

class AppNavBar extends Component {
  render() {
    return (
      <AppNavBarStyled>
        <Logo>CryptoDash</Logo>
        <div className="text-transparent">Space Remaining</div>
        <ControlButton name="dashboard" active />
        <ControlButton name="settings" />
      </AppNavBarStyled>
    )
  }
}

export default AppNavBar
