import { objectKeys } from "@/utils/customObject";
import { SearchRangeLabel, toMatchRangeLabel } from "./SearchRange";

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

export const setOption = (
  options: ISearchOptions,
  key: keyof ISearchOptions,
  value: string
) => {
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
      options[key] = toMatchRangeLabel(value);
      break;
    case "genre":
      options[key] = value;
      break;
  }
};
