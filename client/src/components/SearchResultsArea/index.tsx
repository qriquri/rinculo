import { Box, List } from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/SectionHeader";
import styles from "./index.module.css";
import CustomToolBar from "./ToolBar";
import ShopListItem from "./ShopListItem";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { objectKeys } from "@/utils/customObject";
import { FETCH_NUM_UNIT, SearchRangeLabel, defaultOptions } from "@/entities/SearchOptions";
import { fetchShopInfo } from "@/redux/slices/SearchSlice";

const SearchResultsArea: React.FC = () => {
  const searchState = useAppSelector((state) => state.search);

  const params = useSearchParams();

  const dispatch = useAppDispatch();

  const ShopListItems = React.useMemo(() => {
    const shopList = searchState.result?.shops ?? [];

    return shopList.map((item, index) => {
      return (
        <ShopListItem
          key={index}
          imgUrl={item.photo.mobile.l}
          shopName={item.name}
          access={item.access}
        />
      );
    });
  }, [searchState.result?.shops]);

  React.useEffect(() => {
    console.log(params.toString());
    const keys = objectKeys(searchState.searchOptions);
    const options = {...defaultOptions(), ...searchState.searchOptions};
    keys.forEach((key) => {
      if (!params.has(key)) {
        return;
      }

      const value = params.get(key);
      if (!value) {
        return;
      }
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
          options[key] = Number(value) as SearchRangeLabel;
          break;
      }
    })
      console.log(searchState.searchOptions, options)
      dispatch(fetchShopInfo(options))
  }, [params]);

  return (
    <React.Fragment>
      <Box className={styles.section}>
        <Box className={styles.wrapper}>
          <SectionHeader text="検索結果" />
          <CustomToolBar />
        </Box>
      </Box>
      <List className={styles.resultList}>{ShopListItems}</List>
      <Box className={styles.section}>
        <Box className={styles.wrapper}>
          <CustomToolBar />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SearchResultsArea;
