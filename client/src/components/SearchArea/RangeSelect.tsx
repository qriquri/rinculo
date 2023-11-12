import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./RangeSelect.module.css";
import { SearchRanges } from "@/entities/SearchOptions";

const RangeSelect: React.FC = () => {
  return (
    <FormControl className={styles.selectContainer} fullWidth>
      <InputLabel id="search-range-label">検索範囲</InputLabel>
      <Select
        className={styles.select}
        labelId="search-range-label"
        label="検索範囲"
        value={0}
        inputProps={{ MenuProps: { disableScrollLock: true } }} // セレクターを開いたときに勝手にbodyにpaddingが追加されるのを防ぐ
        sx={{ bgcolor: "white" }}
      >
        {SearchRanges.map((range, index) => {
          return (
            <MenuItem key={index} value={index}>
              {range}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default RangeSelect;
