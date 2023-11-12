import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import ISearchOptions from "@/entities/SearchOptions";

interface ISearchState {
  searchOptions: ISearchOptions;
}

export const initialState: ISearchState = {
  searchOptions: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchOptions: (state, action: PayloadAction<ISearchOptions>) => {
      state.searchOptions = action.payload;
    },
  },
});

export const { updateSearchOptions } = searchSlice.actions;
export default searchSlice.reducer;
