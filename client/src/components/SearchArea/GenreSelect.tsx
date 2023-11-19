import { MenuItem, SelectChangeEvent } from "@mui/material";
import SelectForm from "./SelectForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchShopGenre,
  updateSearchOptions,
} from "@/redux/slices/SearchSlice";

const GenreSelect: React.FC = () => {
  const { searchOptions, genres } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const selectLabel = genres.findIndex(
    (genre) => genre.code === searchOptions.genre
  );

  const handleOpen = () => {
    // NextJSはfetchの内容をキャッシュしてくれる
    dispatch(fetchShopGenre());
  };

  const handelSelect = (e: SelectChangeEvent<number>) => {
    if (genres.length === 0) {
      return;
    }
    const index = Number(e.target.value);
    dispatch(
      updateSearchOptions({ ...searchOptions, genre: index === -1 ? undefined : genres[index].code })
    );
  };

  return (
    <SelectForm
      label="検索ジャンル"
      value={selectLabel}
      onSelectChange={handelSelect}
      onSelectOpen={handleOpen}
    >
      <MenuItem key={-1} value={-1}>
        ジャンルを選択してください
      </MenuItem>
      {genres.map((genre, index) => {
        return (
          <MenuItem key={index} value={index}>
            {genre.name}
          </MenuItem>
        );
      })}
    </SelectForm>
  );
};

export default GenreSelect;
