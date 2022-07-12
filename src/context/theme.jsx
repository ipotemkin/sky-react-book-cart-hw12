/* eslint-disable import/prefer-default-export */

import React, { useContext } from "react"; 

export const themes = {
    green: { color: 'green' },
    orange: { color: 'orange' }
}

export const ThemeContext = React.createContext({
    theme: themes.green,
    toggleTheme: () => {},
})

export const useThemeContext = () => {
    const theme = useContext(ThemeContext)

    if (!theme) return themes.green
    return theme
}
