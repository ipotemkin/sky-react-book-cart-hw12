import { useThemeContext } from "../../context/theme"
import  * as S from "./styles"

const ThemeSwitcher = ({onClick}) => {
  const theme = useThemeContext()

  return (
    <S.ThemeSwitcher
      type="button"
      color={theme.color}
      onClick={onClick}
    >
      Toggle theme
    </S.ThemeSwitcher>
  )
}

export default ThemeSwitcher
