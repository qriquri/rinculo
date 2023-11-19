import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchOptions } from "@/redux/slices/SearchSlice";
import SelectForm from "./SelectForm";
import { SearchRanges, SearchRange } from "@/entities/SearchRange";

const RangeSelect: React.FC = () => {
  const searchOptions = useAppSelector((state) => state.search.searchOptions);
  const dispatch = useAppDispatch();

  const selectedRangeLabel = SearchRanges.findIndex(
    (range) => SearchRange[range] === searchOptions.range
  );

  const handleSelectRange = (e: SelectChangeEvent<number>) => {
    const index = Number(e.target.value);

    dispatch(
      updateSearchOptions({
        ...searchOptions,
        range: index === -1 ? undefined : SearchRange[SearchRanges[index]],
      })
    );
  };

  return (
    <SelectForm
      label="検索範囲"
      value={selectedRangeLabel}
      onSelectChange={handleSelectRange}
    >
      <MenuItem key={-1} value={-1}>
        検索範囲を選択してください
      </MenuItem>
      {SearchRanges.map((range, index) => {
        return (
          <MenuItem key={index} value={index}>
            {range}m
          </MenuItem>
        );
      })}
    </SelectForm>
  );
};

export default RangeSelect;
