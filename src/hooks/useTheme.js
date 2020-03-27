import { useEffect } from "react"
import { themes } from "../utils/theming"
import root from "window-or-global"

const useTheme = category => {
  useEffect(() => {
    const themeColors = themes[category]
    if (themeColors && root.document) {
      root.document.documentElement.style.setProperty(
        "--primary-color",
        themeColors.primary
      )
      root.document.documentElement.style.setProperty(
        "--secondary-color",
        themeColors.secondary
      )
      root.document.documentElement.style.setProperty(
        "--tertiary-color",
        themeColors.tertiary
      )
    }
  }, [category, root])
}

export default useTheme
