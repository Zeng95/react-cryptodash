import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import { SettingsContext } from '../../context/SettingsContext'
import { darkBlueBackground, fontSize2 } from '../Shared/Styles'

const { Consumer } = SettingsContext
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
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
  handleFilter = _.debounce((inputValue, coins) => {
    const coinSymbols = Object.keys(coins)
    const coinNames = coinSymbols.map((key) => coins[key].Name)

    const allStringsToSearch = coinSymbols.concat(coinNames)
    const fuzzyResults = fuzzy.filter(inputValue, allStringsToSearch, {})
    console.log(fuzzyResults)

    // const results = allStringsToSearch.filter((item) => {
    //   return item.toLowerCase().includes(inputValue.toLowerCase())
    // })
    // console.log(results)
  }, 1000)

  handleKeyUp(event, coins, setFilteredCoins) {
    const inputValue = event.target.value
    this.handleFilter(inputValue, coins)
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { coins, setFilteredCoins } = value

          return (
            <SearchGrid>
              <h2>Search all coins</h2>
              <SearchInput
                onKeyUp={(event) => {
                  this.handleKeyUp(event, coins, setFilteredCoins)
                }}
              />
            </SearchGrid>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
