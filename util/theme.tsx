import { createTheme } from '@mui/material/styles'

interface Options {
    light?: string;
    default: string;
    dark?: string;
    darkest?: string;
}

declare module '@mui/material/styles' {
    interface Palette {
        orange: Palette['primary'];
        blue: Palette['primary'];
        green: Palette['primary'];
        backdrop: Palette['primary'];
    }
    interface PaletteOptions {
        orange: Options;
        blue: Options;
        green: Options;
        backdrop: Options;
    }
  }

const theme = createTheme({
    palette: {
        orange: {
            light: "#FFAB5D",
            default: "#FF9839",
            dark: "#FD7C05",
            darkest: "#BF5C00"
        },
        blue: {
            light: "#5672C6",
            default: "#3857B5",
            dark: "#173CAB",
            darkest: "#0F2C81"
        },
        green: {
            light: "#4ED566",
            default: "#2DCA48",
            dark: "#04C225",
            darkest: "#009219"
        },
        backdrop: {
            light: "#bebebe",
            default: "#343434",
            dark: "#000000",
        }
    }
})

export default theme;