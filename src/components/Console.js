/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */

import { useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { useThemeContext } from '../context/theme'
import Line from './Line'
import ResetButton from './reset-button'

const circlePit = keyframes`
transform : rotateZ()
`

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;

background: black;

border: none;
resize: none;
 
color: ${(props) => props.color || 'green'};
 
animation : ${circlePit} 2s;

&:focus { outline:none; }
`

const DEFAULT_CMD = 'C/users/SKYPRO_REACT>'

export default function Console({...props}) {
  const theme = useThemeContext()
  const [lines, setLines] = useState([DEFAULT_CMD])
  const [line, setLine] = useState('')
  
  const AreaRef = useRef()

  const onKeyPress = e => {
    if (e.charCode === 13) {
      e.preventDefault()
      setLines([...lines, e.target.value, DEFAULT_CMD])
      setLine('')
    }
  }

  const onReset = () => {
    setLines([DEFAULT_CMD])
    setLine('')
    AreaRef.current.focus()
  }

  const onChange = e => setLine(e.target.value)

  return (
    <div style={{ height: '100vh' }}>
      <ResetButton
        text='RESET'
        onClick={onReset}
        disabled={ line || lines.length > 1 ? '' : 'disabled' }
      />
      {lines.map(item => <Line key={crypto.randomUUID()}>{item}</Line>)}
      <StyledConsole
        color={theme.color}
        onKeyPress={onKeyPress}
        {...props}
        ref={AreaRef}
        onChange={onChange}
        value={line}
      />
    </div>
  )
}
