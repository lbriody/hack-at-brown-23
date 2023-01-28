
import { ThemeProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', variable`,
    body: `'Inter', variable`,
  },
  components: {
  Button:{
    defaultProps: {
    color: '#FFFFFF',
    bg: "#4F11FF"
    }

  }
}
})
export default theme;