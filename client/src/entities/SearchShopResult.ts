import ISearchOptions from "./SearchOptions";
import IShopInfo from "./ShopInfo";

export interface ISearchShopResult {
  totalNum: number;
  start: number;
  shops: IShopInfo[];
}

export interface IFetchedShopInfo {
  options: ISearchOptions;
  result: ISearchShopResult;
}
