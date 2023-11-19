import { Box } from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/uiParts/SectionHeader";
import styles from "./index.module.css";
import { grey } from "@mui/material/colors";
import RangeSelect from "./RangeSelect";
import SearchButton from "./SearchButton";
import AdditionalOptions from "./AdditionalOptions";
import GenreSelect from "./GenreSelect";

const SearchArea: React.FC = () => {
  return (
    <Box className={styles.section}>
      <Box className={styles.wrapper} sx={{ bgcolor: grey[200] }}>
        <SectionHeader text="検索" />
        <Box className={styles.form}>
          <RangeSelect />
          <SearchButton />
        </Box>
        <Box className={styles.additionalOptions}>
          <AdditionalOptions>
            <GenreSelect />
          </AdditionalOptions>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchArea;
