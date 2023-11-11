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

const RangeList = [
  { label: 1, text: "300" },
  { label: 2, text: "500" },
  { label: 3, text: "1000" },
  { label: 4, text: "2000" },
  { label: 5, text: "3000" },
];

const SearchArea: React.FC = () => {
  return (
    <Box className={styles.section}>
      <Box className={styles.wrapper} sx={{ bgcolor: grey[200] }}>
        <SectionHeader text="検索" />
        <Box className={styles.form}>
          <FormControl className={styles.selectContainer} fullWidth>
            <InputLabel id="search-range-label">検索範囲</InputLabel>
            <Select
              className={styles.select}
              labelId="search-range-label"
              label="検索範囲"
              value={RangeList[0].label}
              inputProps={{MenuProps: {disableScrollLock: true}}} // セレクターを開いたときに勝手にbodyにpaddingが追加されるのを防ぐ
              sx={{bgcolor: 'white'}}
            >
              {RangeList.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.label}>
                    {item.text}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button variant="contained" sx={{color: 'white'}}>検索</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchArea;
