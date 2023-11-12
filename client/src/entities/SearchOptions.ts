import { objectKeys } from "@/utils/customObject";

export const SearchRange = {
  "300": 1,
  "500": 2,
  "1000": 3,
  "2000": 4,
  "3000": 5,
} as const;
export type SearchRangeKeys = keyof typeof SearchRange;
export type SearchRangeLabel = (typeof SearchRange)[keyof typeof SearchRange];
export const SearchRanges = objectKeys(SearchRange);

export type DataFormat = "json";

export const FETCH_NUM_UNIT = 20;
export default interface ISearchOptions {
  range?: SearchRangeLabel;
  lat?: number;
  lng?: number;
  count?: number;
  start?: number;
  format: DataFormat;
}

export const defaultOptions = (): ISearchOptions => ({
  range: undefined,
  lat: undefined,
  lng: undefined,
  count: FETCH_NUM_UNIT,
  start: undefined,
  format: "json",
});

export const toQueryParam = (options: ISearchOptions) => {
  const keys = objectKeys(options);
  const params = keys.map((key) => {
    if (options[key]) {
      return `${key}=${options[key]}`;
    }
  });

  return params.filter((param) => param).join("&");
};
