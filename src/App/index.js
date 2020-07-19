import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import './App.css'

const MyButton = styled.div`
  color: green;
  ${props =>
    props.primary &&
    css`
      border: 1px solid yellow;
    `}
`

class Welcome extends Component {
  render() {
    return <h1>Welcome to CryptoDash</h1>
  }
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <MyButton primary>My Button</MyButton>
    </div>
  )
}

export default App
