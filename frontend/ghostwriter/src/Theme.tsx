
import { ThemeProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Courier New', variable`,
    body: `'Courier New', variable`,
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