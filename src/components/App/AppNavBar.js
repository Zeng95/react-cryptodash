import { ReactComponent as ArrowIcon } from 'assets/arrow.svg'
import { ReactComponent as LanguageIcon } from 'assets/language.svg'
import { ReactComponent as ThemeIcon } from 'assets/theme.svg'
import { greenBoxShadow } from 'components/Shared/Styles'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import AppMenu from './AppMenu'

const AppNavBarStyled = styled.header`
  display: grid;
  grid-template-columns: 180px auto 100px 100px 120px 120px;
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
const LanguageButtonStyled = styled(BasicButton)`
  position: relative;
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
const Language = styled.span`
  display: inline-block;
  margin: 0px 8px;
`
const ThemeButtonStyled = styled(LanguageButtonStyled)``

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

class LanguageButton extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ languageVisible, setLanguageVisible, toggleMenuVisible }) => (
          <LanguageButtonStyled
            title="Change language"
            onClick={() =>
              toggleMenuVisible(languageVisible, setLanguageVisible)
            }
          >
            <LanguageIcon
              style={{ width: '18px', height: '18px', fill: 'white' }}
            />
            <Language>ENGLISH</Language>
            <ArrowIcon
              style={{ width: '10px', height: '10px', fill: 'white' }}
            />
            <AppMenu menuVisible={languageVisible}>
              <li>English</li>
              <li>中文</li>
              <li>Español</li>
            </AppMenu>
          </LanguageButtonStyled>
        )}
      </AppContext.Consumer>
    )
  }
}

class ThemeButton extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ themeVisible, setThemeVisible, toggleMenuVisible }) => (
          <ThemeButtonStyled
            title="Change theme"
            onClick={() => toggleMenuVisible(themeVisible, setThemeVisible)}
          >
            <ThemeIcon
              style={{ width: '18px', height: '18px', fill: 'white' }}
            />
            <Language>Dark</Language>
            <ArrowIcon
              style={{ width: '10px', height: '10px', fill: 'white' }}
            />
            <AppMenu menuVisible={themeVisible}>
              <li>Dark</li>
              <li>Light</li>
            </AppMenu>
          </ThemeButtonStyled>
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

        <LanguageButton />
        <ThemeButton />
      </AppNavBarStyled>
    )
  }
}

export default AppNavBar
