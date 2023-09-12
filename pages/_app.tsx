import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import createEmotionCache from "../util/createEmotionCache";
import theme from "./../util/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <NextNProgress />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
