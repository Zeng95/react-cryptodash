import { fontSize2 } from '../Shared/Styles'
import styled, { css } from 'styled-components'

export default styled.select`
  ${fontSize2}
  border: 1px solid;
  color: #1163c9;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000;
  ${({ theme }) =>
    css`
      ${theme.darkBlueBackground}
    `}
`
