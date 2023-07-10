import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5'
  }
}

const fonts = {
  body: 'Courier New',
  heading: 'Courier New'
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ colors, fonts, config })

export default theme
