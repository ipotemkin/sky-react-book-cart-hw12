import * as S from "./styles"
import { useThemeContext } from "../../context/theme"


const ResetButton = ({text, onClick, disabled}) => {
  const theme = useThemeContext()

  return (
    <S.ResetButton
      type="button"
      color={theme.color}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </S.ResetButton>
  )
}

export default ResetButton
