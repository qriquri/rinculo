"use client";
import styles from "./page.module.css";
import CustomAppBar from "@/components/AppBar";
import SearchArea from "@/components/SearchArea";
import SearchResultsArea from "@/components/SearchResultsArea";
import ShopDetailArea from "@/components/ShopDetailArea";
import { store } from "@/redux/store";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F16F6F",
    },
    secondary: {
      main: "#F0E1CF",
    },
  },
});

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <header>
          <CustomAppBar />
        </header>
        <main className={styles.main}>
          <ShopDetailArea />
        </main>
      </ThemeProvider>
    </ReduxProvider>
  );
}
