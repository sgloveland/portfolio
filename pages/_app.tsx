import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import createEmotionCache from "../util/createEmotionCache"
import theme from "./../util/theme"

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }:any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
