import React, { Component } from 'react'
import styled from 'styled-components'

import { darkBlueBackground, fontSize2 } from '../Shared/Styles'

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
  render() {
    return (
      <SearchGrid>
        <h2>Search all coins</h2>
        <SearchInput />
      </SearchGrid>
    )
  }
}

export default Search
