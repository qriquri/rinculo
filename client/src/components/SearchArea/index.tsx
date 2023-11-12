import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/SectionHeader";
import styles from "./index.module.css";
import { grey } from "@mui/material/colors";
import RangeSelect from "./RangeSelect";

const SearchArea: React.FC = () => {
  return (
    <Box className={styles.section}>
      <Box className={styles.wrapper} sx={{ bgcolor: grey[200] }}>
        <SectionHeader text="検索" />
        <Box className={styles.form}>
          <RangeSelect />
          <Button variant="contained" sx={{color: 'white'}}>検索</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchArea;
