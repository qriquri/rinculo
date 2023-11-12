import ISearchOptions from "@/entities/SearchOptions";
import reducer, {
  updateSearchOptions,
  initialState,
} from "@/redux/slices/SearchSlice";
import { setupStore } from "@/redux/store";

describe("Slice構築のテスト", () => {
  it("初期値を返す", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });
});

describe("updateSearchOptions", () => {
    it("値をセットできる", () => {
        const store = setupStore()
        store.dispatch(updateSearchOptions({...store.getState().search.searchOptions, range: "1"}))
        const expectOptions: ISearchOptions = {...store.getState().search.searchOptions, range: "1"}

        expect(store.getState().search.searchOptions).toEqual(expectOptions)
    })
})
