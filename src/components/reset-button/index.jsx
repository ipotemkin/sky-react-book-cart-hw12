import styled from "styled-components"

const ResetButtonStyle = styled.button`
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

const ResetButton = ({color, text, onClick, disabled}) => (
    <ResetButtonStyle
        type="button"
        color={color}
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </ResetButtonStyle>
)

export default ResetButton
