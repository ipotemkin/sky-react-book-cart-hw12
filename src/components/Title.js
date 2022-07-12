/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components'
import { useThemeContext } from '../context/theme'

const StyledTitle = styled.h1`
  color: ${(props) => props.color || 'green'};
`

const Title = (props) => {
  const { theme } = useThemeContext()

  return <StyledTitle color={theme.color} {...props} />
}

export default Title
