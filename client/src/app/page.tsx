"use client"
import styles from "./page.module.css";
import CustomAppBar from "@/components/AppBar";
import SearchArea from "@/components/SearchArea";
import SearchResultsArea from "@/components/SearchResultsArea";
import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F16F6F"
    },
    secondary: {
      main: "#F0E1CF"
    }
  }
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <header>
      <CustomAppBar />
      </header>
      <main className={styles.main}>
        <SearchArea />
        <SearchResultsArea />
      </main>
    </ThemeProvider>
  );
}
