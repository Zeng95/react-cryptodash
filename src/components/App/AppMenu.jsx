import { textAlignLeft } from '../Shared/Styles'
import styled, { css } from 'styled-components'

const AppMenu = styled.ul`
  background-color: white;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  left: 50%;
  opacity: 0;
  overflow: hidden;
  padding: 8px 0;
  position: absolute;
  top: 26px;
  transform: translateX(-50%);
  transition: all 0.2s ease-out;
  width: 90%;
  z-index: -1;

  li {
    ${textAlignLeft}
    letter-spacing: 0.00938em;
    padding: 6px 16px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  ${({ menuVisible }) =>
    menuVisible &&
    css`
      opacity: 1;
      top: 30px;
      z-index: 1000;
    `}
`

export default AppMenu
