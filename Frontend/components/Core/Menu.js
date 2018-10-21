import styled from 'styled-components'
import colors from '../../config/colors'
import { medium } from '../../config/fontSize'

const MenuOrganizer = styled.div`
  background: #FFF;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1.25em .5em;
  margin: 10px 0;
  border: 1px solid ${colors.mainOrange};
  border-left: 5px solid ${colors.mainOrange};
  font-size: ${medium};
  color: ${colors.mainOrange};

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 21px;
  }

  &:hover {
    cursor: pointer;
    color: #FFF;
    background-color: ${colors.mainOrange};
    img {
      filter: brightness(0) invert(1);
    }
  }
`

export { MenuOrganizer }
