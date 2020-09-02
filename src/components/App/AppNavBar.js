import { ReactComponent as ArrowIcon } from 'assets/arrow.svg'
import { ReactComponent as LanguageIcon } from 'assets/language.svg'
import { ReactComponent as LanguageSolidIcon } from 'assets/language-solid.svg'
import { ReactComponent as ThemeIcon } from 'assets/theme.svg'
import { ReactComponent as ThemeSolidIcon } from 'assets/theme-solid.svg'
import { AppContext } from 'context/AppContext'
import { SettingsContext } from 'context/SettingsContext'
import { ThemeContext } from 'context/ThemeContext'
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { greenBoxShadow } from '../Shared/Styles'
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
    ${greenBoxShadow}
    ${({ theme }) =>
      css`
        ${theme.lightBlueBackground}
      `}
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
      i18n.changeLanguage(language, (err, t) => {
        if (err) return console.log('something went wrong loading', err)

        setPage(t('navbar.dashboard'))
      })
    } else if (page === t('navbar.settings')) {
      i18n.changeLanguage(language, (err, t) => {
        if (err) return console.log('something went wrong loading', err)

        setPage(t('navbar.settings'))
      })
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
    const { t, i18n, isDark, theme, langIconStyle, arrowIconStyle } = this.props

    return (
      <AppContext.Consumer>
        {({
          page,
          setPage,
          languageVisible,
          setLanguageVisible,
          toggleMenuVisible
        }) => (
          <LanguageButtonStyled
            theme={theme}
            title="Change language"
            onMouseEnter={() =>
              toggleMenuVisible(languageVisible, setLanguageVisible)
            }
            onMouseLeave={() =>
              toggleMenuVisible(languageVisible, setLanguageVisible)
            }
          >
            {isDark ? (
              <LanguageIcon style={langIconStyle} />
            ) : (
              <LanguageSolidIcon style={langIconStyle} />
            )}
            <Language>{this.getLanguage(i18n)}</Language>
            <ArrowIcon style={arrowIconStyle} />

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
        )}
      </AppContext.Consumer>
    )
  }
}

class ThemeButton extends Component {
  getTheme(i18n, isDark) {
    const language = i18n.language

    if (language === 'en') {
      return isDark ? 'dark' : 'light'
    } else if (language === 'es') {
      return isDark ? 'oscuro' : 'claro'
    } else if (language === 'zh') {
      return isDark ? '深色' : '浅色'
    }
  }

  render() {
    const {
      t,
      i18n,
      isDark,
      theme,
      toggleTheme,
      langIconStyle,
      arrowIconStyle
    } = this.props

    return (
      <AppContext.Consumer>
        {({ themeVisible, setThemeVisible, toggleMenuVisible }) => (
          <ThemeButtonStyled
            theme={theme}
            title="Change theme"
            onMouseEnter={() =>
              toggleMenuVisible(themeVisible, setThemeVisible)
            }
            onMouseLeave={() =>
              toggleMenuVisible(themeVisible, setThemeVisible)
            }
          >
            {isDark ? (
              <ThemeIcon style={langIconStyle} />
            ) : (
              <ThemeSolidIcon style={langIconStyle} />
            )}
            <Language>{this.getTheme(i18n, isDark)}</Language>
            <ArrowIcon style={arrowIconStyle} />

            <AppMenu menuVisible={themeVisible}>
              <li onClick={() => toggleTheme(true)}>
                {t('navbar.theme.dark')}
              </li>
              <li onClick={() => toggleTheme(false)}>
                {t('navbar.theme.light')}
              </li>
            </AppMenu>
          </ThemeButtonStyled>
        )}
      </AppContext.Consumer>
    )
  }
}

class AppNavBar extends Component {
  render() {
    const { t, i18n } = this.props

    return (
      <ThemeContext.Consumer>
        {({ dark, theme, toggleTheme }) => {
          const languageIconStyle = {
            width: '18px',
            height: '18px',
            fill: theme.color4
          }
          const arrowIconStyle = {
            width: '10px',
            height: '10px',
            fill: theme.color4
          }

          return (
            <AppNavBarStyled>
              <Logo>CryptoDash</Logo>
              <div className="text-transparent">Space Remaining</div>

              <ControlButton t={t} name={t('navbar.dashboard')} active />
              <ControlButton t={t} name={t('navbar.settings')} />

              <LanguageButton
                t={t}
                i18n={i18n}
                isDark={dark}
                theme={theme}
                langIconStyle={languageIconStyle}
                arrowIconStyle={arrowIconStyle}
              />
              <ThemeButton
                t={t}
                i18n={i18n}
                isDark={dark}
                theme={theme}
                langIconStyle={languageIconStyle}
                arrowIconStyle={arrowIconStyle}
                toggleTheme={toggleTheme}
              />
            </AppNavBarStyled>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withTranslation()(AppNavBar)
