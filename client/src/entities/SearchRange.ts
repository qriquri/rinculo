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

export const toMatchRangeLabel = (value: string): SearchRangeLabel | undefined => {
  switch (value) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      return value as SearchRangeLabel;
  }
};
