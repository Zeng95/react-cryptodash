import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`

const Logo = styled.h1`
  font-size: 1.5em;
  margin: 0;
`

const ControlButtonElem = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  color: white;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: red;
    `}
`

class ControlButton extends Component {
  capitalize(str) {
    // 首字母大写，其余字母小写
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }

  render() {
    const { name, active } = this.props

    return (
      <ControlButtonElem active={active}>
        {this.capitalize(name)}
      </ControlButtonElem>
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
