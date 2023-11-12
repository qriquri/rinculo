import { Box, List } from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/SectionHeader";
import styles from "./index.module.css";
import CustomToolBar from "./ToolBar";
import ShopListItem from "./ShopListItem";
import { useAppSelector } from "@/redux/hooks";


const SearchResultsArea: React.FC = () => {
  const searchState = useAppSelector((state) => state.search);

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
