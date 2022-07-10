/* eslint-disable import/prefer-default-export */

import styled from "styled-components"

export const ThemeSwitcher = styled.button`
margin: 16px;
padding: 10px 16px 10px 16px;
border: 1px solid ${(props) => props.color || 'green'};
border-radius: 5px;
background: none;
color: ${(props) => props.color || 'green'};

:hover {
  cursor: pointer;
}

:disabled {
  cursor: not-allowed;
  color: grey;
  border-color: grey;
}
`