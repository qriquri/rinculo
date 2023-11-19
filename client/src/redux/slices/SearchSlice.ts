import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISearchOptions, {
  defaultOptions,
  toQueryParam,
} from "@/entities/SearchOptions";
import { IFetchedShopGenres, IGenre } from "@/entities/Genre";
import { IFetchedShopInfo, ISearchShopResult } from "@/entities/SearchShopResult";

interface ISearchState {
  searchOptions: ISearchOptions;
  result?: ISearchShopResult;
  isFetching: boolean;
  genres: IGenre[];
  isFetchingGenres: boolean;
}

export const initialState: ISearchState = {
  searchOptions: defaultOptions(),
  isFetching: false,
  genres: [],
  isFetchingGenres: false
};

export const fetchShopInfo = createAsyncThunk(
  "fetchShopInfo",
  async (payload: ISearchOptions): Promise<IFetchedShopInfo> => {
    const res = await fetch("/api/shopInfo?" + toQueryParam(payload), {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);

    return { options: payload, result: json };
  }
);

export const fetchShopGenre = createAsyncThunk(
  "fetchShopGenre",
  async (): Promise<IFetchedShopGenres> => {
    const res = await fetch("/api/genre", {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);

    return json;
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

    builder.addCase(fetchShopGenre.pending, (state, action) => {
      state.isFetchingGenres = true;
    });
    builder.addCase(
      fetchShopGenre.fulfilled,
      (state, action: PayloadAction<IFetchedShopGenres>) => {
        state.isFetchingGenres = false;
        state.genres = action.payload.genre;
      }
    );
    builder.addCase(fetchShopGenre.rejected, (state, action) => {
      state.isFetchingGenres = false;
      alert("店ジャンルの取得に失敗しました。");
    });
  },
});

export const { updateSearchOptions } = searchSlice.actions;
export default searchSlice.reducer;
