import { useEffect } from "react"
import { themes } from "../utils/theming"

const useTheme = category => {
  useEffect(() => {
    const themeColors = themes[category]
    if (themeColors && document) {
      document.documentElement.style.setProperty(
        "--primary-color",
        themeColors.primary
      )
      document.documentElement.style.setProperty(
        "--secondary-color",
        themeColors.secondary
      )
      document.documentElement.style.setProperty(
        "--tertiary-color",
        themeColors.tertiary
      )
    }
  }, [category, document])
}

export default useTheme
