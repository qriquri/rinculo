import { objectKeys } from "@/utils/customObject";

export const SearchRange = {
  "300": 1,
  "500": 2,
  "1000": 3,
  "2000": 4,
  "3000": 5,
};
export const SearchRanges = objectKeys(SearchRange);

export default interface SearchOptions {
  range?: typeof SearchRanges;
}
