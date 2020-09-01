import { fontSize2 } from '../Shared/Styles'
import styled, { css } from 'styled-components'

export default styled.select`
  ${fontSize2}
  position: absolute;
  top: 10px;
  right: 10px;
  color: #1163c9;
  border: 1px solid;
  cursor: pointer;
  z-index: 1000;
  ${({ theme }) =>
    css`
      ${theme.darkBlueBackground}
    `}
`
