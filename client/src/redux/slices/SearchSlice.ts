import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import ISearchOptions, { defaultOptions, toQueryParam } from "@/entities/SearchOptions";

interface ISearchResult {
  totalNum: number
  start: number
  shops: any[]
}

interface ISearchState {
  searchOptions: ISearchOptions;
  result?: ISearchResult;
  isFetching: boolean;
}

interface IFetchedShopInfo {
  options: ISearchOptions;
  result: ISearchResult;
}

export const initialState: ISearchState = {
  searchOptions: defaultOptions,
  isFetching: false,
};

export const fetchShopInfo = createAsyncThunk(
  "fetchShopInfo",
  async (payload: ISearchOptions): Promise<IFetchedShopInfo> => {
    const res = await fetch("/api/shopInfo?" + toQueryParam(payload), {
      method: "GET",
    });
    const json = await res.json()
    console.log(json);

    return { options: payload, result: json };
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchOptions: (state, action: PayloadAction<ISearchOptions>) => {
      state.searchOptions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopInfo.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(
      fetchShopInfo.fulfilled,
      (state, action: PayloadAction<IFetchedShopInfo>) => {
        state.isFetching = false;
        state.searchOptions = action.payload.options;
        state.result = action.payload.result;
      }
    );
    builder.addCase(fetchShopInfo.rejected, (state, action) => {
      state.isFetching = false;
      alert("店情報の取得に失敗しました。");
    });
  },
});

export const { updateSearchOptions } = searchSlice.actions;
export default searchSlice.reducer;
