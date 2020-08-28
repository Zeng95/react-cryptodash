import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Language } from 'assets/language.svg'
import { ReactComponent as Theme } from 'assets/theme.svg'
import { ReactComponent as Arrow } from 'assets/arrow.svg'
import { greenBoxShadow } from 'components/Shared/Styles'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px 120px 110px;
  margin-bottom: 40px;
`
const Logo = styled.h1`
  margin: 0;
  font-size: 1.5em;
`

const BasicButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  color: white;
`
const ControlButtonStyled = styled(BasicButton)`
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 20px #03ff03;
    `}
`
const LanguageButton = styled(BasicButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  transition: all 0.2s;
  &:hover {
    background-color: #061a44;
    ${greenBoxShadow}
  }
`
const LanguageStyled = styled.span`
  display: inline-block;
  margin: 0px 8px;
`
const ThemeButton = styled(LanguageButton)``

// Extend another class
class ControlButton extends Component {
  capitalize(str) {
    // 首字母大写，其余字母小写
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }

  handleClick(name, setPage, favoriteCoins, confirmFavorites) {
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
                <ControlButtonStyled
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
                </ControlButtonStyled>
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

        <LanguageButton title="Change language">
          <Language style={{ width: '18px', height: '18px', fill: 'white' }} />
          <LanguageStyled>ENGLISH</LanguageStyled>
          <Arrow style={{ width: '10px', height: '10px', fill: 'white' }} />
        </LanguageButton>

        <ThemeButton title="Change theme">
          <Theme style={{ width: '18px', height: '18px', fill: 'white' }} />
          <LanguageStyled>Dark</LanguageStyled>
          <Arrow style={{ width: '10px', height: '10px', fill: 'white' }} />
        </ThemeButton>
      </AppNavBarStyled>
    )
  }
}

export default AppNavBar
