import { textAlignLeft } from 'components/Shared/Styles'
import styled, { css } from 'styled-components'

export default styled.ul`
  position: absolute;
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  border-radius: 4px;
  padding: 8px 0;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
  & > li {
    ${textAlignLeft}
    padding: 6px 16px;
    letter-spacing: 0.00938em;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  ${({ menuVisible }) =>
    menuVisible &&
    css`
      top: 32px;
      opacity: 1;
      z-index: 1000;
    `}
`
