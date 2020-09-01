import { ReactComponent as ArrowIcon } from 'assets/arrow.svg'
import { ReactComponent as LanguageIcon } from 'assets/language.svg'
import { ReactComponent as ThemeIcon } from 'assets/theme.svg'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { greenBoxShadow } from '../Shared/Styles'
import AppMenu from './AppMenu'

const LanguageIconStyle = { width: '18px', height: '18px', fill: 'white' }
const ArrowIconStyle = { width: '10px', height: '10px', fill: 'white' }
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
  color: inherit;
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
  text-transform: uppercase;
`
const ThemeButtonStyled = styled(LanguageButtonStyled)``

// Extend another class
class ControlButton extends Component {
  capitalize(str) {
    // 首字母大写，其余字母小写
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
  }

  handleClick(t, name, setPage, favoriteCoins, confirmFavorites) {
    if (name === t('navbar.dashboard')) {
      confirmFavorites(favoriteCoins)
    }

    setPage(name)
  }

  render() {
    const { t } = this.props

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
                      t,
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
  handleClick(t, i18n, language, page, setPage) {
    if (page === t('navbar.dashboard')) {
      i18n.changeLanguage(language)
      setPage(t('navbar.dashboard'))
    } else if (page === t('navbar.settings')) {
      i18n.changeLanguage(language)
      setPage(t('navbar.settings'))
    }
  }

  getLanguage(i18n) {
    const language = i18n.language

    if (language === 'en') {
      return 'English'
    } else if (language === 'es') {
      return 'Español'
    } else if (language === 'zh') {
      return '中文'
    }
  }

  render() {
    const { t, i18n } = this.props

    return (
      <AppContext.Consumer>
        {value => {
          const {
            page,
            setPage,
            languageVisible,
            setLanguageVisible,
            toggleMenuVisible
          } = value

          return (
            <LanguageButtonStyled
              title="Change language"
              onClick={() =>
                toggleMenuVisible(languageVisible, setLanguageVisible)
              }
            >
              <LanguageIcon style={LanguageIconStyle} />
              <Language>{this.getLanguage(i18n)}</Language>
              <ArrowIcon style={ArrowIconStyle} />

              <AppMenu menuVisible={languageVisible}>
                <li
                  onClick={() => this.handleClick(t, i18n, 'en', page, setPage)}
                >
                  English
                </li>
                <li
                  onClick={() => this.handleClick(t, i18n, 'zh', page, setPage)}
                >
                  中文
                </li>
                <li
                  onClick={() => this.handleClick(t, i18n, 'es', page, setPage)}
                >
                  Español
                </li>
              </AppMenu>
            </LanguageButtonStyled>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

class ThemeButton extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ themeVisible, setThemeVisible, toggleMenuVisible }) => (
          <ThemeContext.Consumer>
            {({ dark, toggleTheme }) => (
              <ThemeButtonStyled
                title="Change theme"
                onClick={() => toggleMenuVisible(themeVisible, setThemeVisible)}
              >
                <ThemeIcon style={LanguageIconStyle} />
                <Language>{dark ? 'dark' : 'light'}</Language>
                <ArrowIcon style={ArrowIconStyle} />

                <AppMenu menuVisible={themeVisible}>
                  <li onClick={() => toggleTheme(true)}>Dark</li>
                  <li onClick={() => toggleTheme(false)}>Light</li>
                </AppMenu>
              </ThemeButtonStyled>
            )}
          </ThemeContext.Consumer>
        )}
      </AppContext.Consumer>
    )
  }
}

class AppNavBar extends Component {
  render() {
    const { t, i18n } = this.props

    return (
      <AppNavBarStyled>
        <Logo>CryptoDash</Logo>
        <div className="text-transparent">Space Remaining</div>

        <ControlButton t={t} name={t('navbar.dashboard')} active />
        <ControlButton t={t} name={t('navbar.settings')} />

        <LanguageButton t={t} i18n={i18n} />
        <ThemeButton />
      </AppNavBarStyled>
    )
  }
}

export default withTranslation()(AppNavBar)
