export interface IGenre {
  code: string;
  name: string;
}

export interface IFetchedShopGenres {
  totalNum: number;
  start: number;
  genre: IGenre[];
}
