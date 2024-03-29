import { Box, List } from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/uiParts/SectionHeader";
import styles from "./index.module.css";
import CustomToolBar from "./ToolBar";
import ShopListItem from "./ShopListItem";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { objectKeys } from "@/utils/customObject";
import { defaultOptions, setOption } from "@/entities/SearchOptions";
import { fetchShopInfo } from "@/redux/slices/SearchSlice";
import useGoShopDetail from "../Hooks/UseGoShopDetail";

const SearchResultsArea: React.FC = () => {
  const searchState = useAppSelector((state) => state.search);

  const params = useSearchParams();
  const goDetail = useGoShopDetail();
  const dispatch = useAppDispatch();

  const handleClickShopItem = (id: string) => {
    goDetail(id);
  };

  const ShopListItems = React.useMemo(() => {
    const shopList = searchState.result?.shops ?? [];

    return shopList.map((item, index) => {
      return (
        <ShopListItem
          key={index}
          id={item.id}
          imgUrl={item.photo.mobile.l}
          shopName={item.name}
          access={item.access}
          onClick={handleClickShopItem}
        />
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState.result?.shops]);

  React.useEffect(() => {
    console.log(params.toString());
    const keys = objectKeys(searchState.searchOptions);
    const options = { ...defaultOptions() };
    keys.forEach((key) => {
      if (!params.has(key)) {
        return;
      }

      const value = params.get(key);
      if (!value) {
        return;
      }
      setOption(options, key, value);
    });
    console.log(searchState.searchOptions, options);
    dispatch(fetchShopInfo(options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
