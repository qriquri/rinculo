import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import SearchOptions from "@/entities/SearchOptions";

interface SearchState {
  searchOptions: SearchOptions;
}

const initialState: SearchState = {
  searchOptions: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchOptions: (state, action: PayloadAction<SearchOptions>) => {
      state.searchOptions = action.payload;
    },
  },
});

export const { updateSearchOptions } = searchSlice.actions;
export default searchSlice.reducer;
