import ISearchOptions, {
  defaultOptions,
  toQueryParam,
} from "@/entities/SearchOptions";

describe("toQueryParam", () => {
  it("緯度と経度を正しくクエリパラメータにできる", () => {
    const options: ISearchOptions = { ...defaultOptions(), lat: 10, lng: 21 };
    expect(toQueryParam(options)).toEqual("lat=10&lng=21&count=20&format=json");
  });
});
