/* eslint-disable import/prefer-default-export */

import React, { useContext } from "react"; 

export const themes = {
    green: { color: 'green' },
    orange: { color: 'orange' }
}

export const ThemeContext = React.createContext(themes.green)

export const useThemeContext = () => {
    const theme = useContext(ThemeContext)

    if (!theme) return themes.green
    return theme
}
