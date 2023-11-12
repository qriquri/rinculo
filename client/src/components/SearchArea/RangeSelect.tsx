import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./RangeSelect.module.css";
import { SearchRanges } from "@/entities/SearchOptions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchOptions } from "@/redux/slices/SearchSlice";

const RangeSelect: React.FC = () => {
  const searchOptions = useAppSelector((state) => state.search.searchOptions);
  const dispatch = useAppDispatch();

  const selectedRangeLabel = SearchRanges.findIndex(
    (range) => range == searchOptions.range
  );

  const handleSelectRange = (e: SelectChangeEvent<number>) => {
    dispatch(
      updateSearchOptions({
        ...searchOptions,
        range: SearchRanges[Number(e.target.value)],
      })
    );
  };

  return (
    <FormControl className={styles.selectContainer} fullWidth>
      <InputLabel id="search-range-label">検索範囲</InputLabel>
      <Select
        className={styles.select}
        labelId="search-range-label"
        label="検索範囲"
        value={selectedRangeLabel}
        inputProps={{ MenuProps: { disableScrollLock: true } }} // セレクターを開いたときに勝手にbodyにpaddingが追加されるのを防ぐ
        sx={{ bgcolor: "white" }}
        onChange={handleSelectRange}
      >
        <MenuItem key={-1} value={-1}>
          検索距離を選択してください
        </MenuItem>
        {SearchRanges.map((range, index) => {
          return (
            <MenuItem key={index} value={index}>
              {range}m
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default RangeSelect;
