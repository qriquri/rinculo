import { objectKeys } from "@/utils/customObject";

export const SearchRange = {
  "300": "1",
  "500": "2",
  "1000": "3",
  "2000": "4",
  "3000": "5",
} as const;
export type SearchRangeLabel = (typeof SearchRange)[keyof typeof SearchRange];
export const SearchRanges = objectKeys(SearchRange);

export type DataFormat = "json";

export const FETCH_NUM_UNIT = 20;
export default interface ISearchOptions {
  id?: string;
  range?: SearchRangeLabel;
  lat?: number;
  lng?: number;
  count?: number;
  start?: number;
  genre?: string;
  format: DataFormat;
}

export const defaultOptions = (): ISearchOptions => ({
  id: undefined,
  range: undefined,
  lat: undefined,
  lng: undefined,
  count: FETCH_NUM_UNIT,
  start: undefined,
  genre: undefined,
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

const toMatchRangeLabel = (value: string): SearchRangeLabel | undefined => {
  switch (value) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      return value as SearchRangeLabel
  }
}

export const setOption = (options: ISearchOptions, key: keyof ISearchOptions, value: string) => {
  switch (key) {
    case "start":
      options[key] = Number(value);
      break;
    case "lat":
      options[key] = Number(value);
      break;
    case "lng":
      options[key] = Number(value);
      break;
    case "format":
      options[key] = "json";
      break;
    case "count":
      options[key] = FETCH_NUM_UNIT;
      break;
    case "range":
      options[key] = toMatchRangeLabel(value)
  }
}
