import { darkBlueBackground, fontSize2 } from '../Shared/Styles'
import { SettingsContext } from 'context/SettingsContext'
import fuzzy from 'fuzzy'
import _ from 'lodash'
import React, { Component } from 'react'
import styled from 'styled-components'

const { Consumer } = SettingsContext
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`
const SearchTitle = styled.h2`
  margin: 0;
`
const SearchInput = styled.input`
  ${darkBlueBackground}
  ${fontSize2}
  color: #1163c9;
  border: 1px solid;
  height: 25px;
  place-self: center left;
`

class Search extends Component {
  // Delay invoking function until after 1s
  handleFilterCoins = _.debounce((inputValue, coins, setFilteredCoins) => {
    // Get all the coin symbols
    const coinSymbols = Object.keys(coins)
    // Get all the coin names, map symbol to name
    const coinNames = coinSymbols.map(key => coins[key].CoinName)
    // Combine a list of the coin symbols and the coin names together
    const allStringsToSearch = coinSymbols.concat(coinNames)
    // A list of the results that has come back from the search
    const fuzzyResults = fuzzy
      .filter(inputValue, allStringsToSearch, {})
      .map(result => result.string)

    let results = {}
    // Deduplicate(去除重复) the fuzzy results, reutrn an array
    Object.entries(coins).forEach(item => {
      const symbol = item[0]
      const coin = item[1]
      const name = coin.CoinName

      if (fuzzyResults.includes(symbol) || fuzzyResults.includes(name)) {
        results[symbol] = coin
      }
    })
    setFilteredCoins(results)

    // An easier way || 更简单的方法
    // const filteredCoins = _.pickBy(coins, (coin, symbolKey) => {
    //   const coinName = coin.CoinName
    //   return fuzzyResults.includes(symbolKey) || fuzzyResults.includes(coinName)
    // })
  }, 1000)

  handleKeyUp(event, coins, setFilteredCoins) {
    const inputValue = event.target.value

    if (!inputValue) {
      setFilteredCoins(null)
      return false
    }

    this.handleFilterCoins(inputValue, coins, setFilteredCoins)
  }

  render() {
    return (
      <Consumer>
        {({ coins, setFilteredCoins }) => {
          return (
            <SearchGrid>
              <SearchTitle>Search all coins</SearchTitle>
              <SearchInput
                onKeyUp={event =>
                  this.handleKeyUp(event, coins, setFilteredCoins)
                }
              />
            </SearchGrid>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
