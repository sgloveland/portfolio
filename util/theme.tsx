import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
      buttons?: Palette['primary'];
    }
    interface PaletteOptions {
      buttons?: PaletteOptions['primary'];
    }
  }

const theme = createTheme({
    palette: {
        primary: {
            main: "#bdbdbd",
        }, 
        secondary: {
            main: "#F8F8F8"
        },
        info: {
            main: "#F8F8F8"
        },
        error: {
            main: "#F8F8F8"
        },
        success: {
            main: "#F8F8F8"
        },
        buttons: {
            light: "#42a5f5",
            main: "#1565c0"
        }
    }
})

export default theme;