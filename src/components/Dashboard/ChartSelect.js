import styled from 'styled-components'
import { fontSize2, darkBlueBackground } from 'components/Shared/Styles'

export default styled.select`
  ${fontSize2}
  ${darkBlueBackground}
  position: absolute;
  top: 10px;
  right: 10px;
  color: #1163c9;
  border: 1px solid;
  cursor: pointer;
  z-index: 1000;
`
