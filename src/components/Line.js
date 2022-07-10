/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components'
import { useThemeContext } from '../context/theme'

const StyledTitle = styled.div`
  color: ${(props) => props.color || 'green'};
  font-size: 14px;
`

const Line = props => {
  const theme = useThemeContext()
  
  return <StyledTitle color={theme.color} {...props} />
}

export default Line
