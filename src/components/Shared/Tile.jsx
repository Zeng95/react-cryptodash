import styled, { css } from 'styled-components'
import { redBoxShadow, greenBoxShadow } from './Styles'

export const Tile = styled.div`
  padding: 10px;
  position: relative;
  transition: all 0.2s;
  ${({ theme }) =>
    css`
      ${theme.lightBlueBackground}
      ${theme.subtleBoxShadow}
    `}
`
export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`
export const DeletableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`
// "pointer-events: none;" means users can not select
export const DisabledTile = styled(Tile)`
  opacity: 0.4;
  pointer-events: none;
`
