import { useThemeContext } from "../../context/theme"
import  * as S from "./styles"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <S.ThemeSwitcher
      type="button"
      color={theme.color}
      onClick={toggleTheme}
    >
      Toggle theme
    </S.ThemeSwitcher>
  )
}

export default ThemeSwitcher
