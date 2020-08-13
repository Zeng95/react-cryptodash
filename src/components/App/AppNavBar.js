import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px 100px;
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
const LanguageButton = styled(ControlButtonElem)``

// Extend another class
class ControlButton extends Component {
  capitalize(str) {
    // 首字母大写，其余字母小写
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }

  handleClick(name, setPage, favoriteCoins, confirmFavorites) {
    console.log('click')
    if (name === 'dashboard') {
      confirmFavorites(favoriteCoins)
    }

    setPage(name)
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ page, setPage, confirmFavorites }) => (
          <SettingsContext.Consumer>
            {({ favoriteCoins }) => {
              const { name } = this.props

              return (
                <ControlButtonElem
                  active={page === name}
                  onClick={() => {
                    this.handleClick(
                      name,
                      setPage,
                      favoriteCoins,
                      confirmFavorites
                    )
                  }}
                >
                  {this.capitalize(name)}
                </ControlButtonElem>
              )
            }}
          </SettingsContext.Consumer>
        )}
      </AppContext.Consumer>
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
        <LanguageButton>Chinese</LanguageButton>
      </AppNavBarStyled>
    )
  }
}

export default AppNavBar
