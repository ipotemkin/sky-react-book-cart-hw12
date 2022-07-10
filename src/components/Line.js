/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components'

const StyledTitle = styled.div`
  color: ${(props) => props.color || 'green'};
  font-size: 14px;
`

const Line = props => <StyledTitle {...props} />

export default Line
