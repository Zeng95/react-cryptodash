import styled from 'styled-components'
import {
  subtleBoxShadow,
  redBoxShadow,
  greenBoxShadow,
  lightBlueBackground
} from './Styles'

export const Tile = styled.div`
  position: relative;
  padding: 10px;
  ${subtleBoxShadow}
  ${lightBlueBackground}
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
  pointer-events: none;
  opacity: 0.4;
`
