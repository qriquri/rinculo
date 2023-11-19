import { Box } from "@mui/system";
import { useParams } from "next/navigation";
import SectionHeader from "../uiParts/SectionHeader";
import ShopDetail from "./ShopDetail";
import styles from "./index.module.css";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchShopInfo } from "@/redux/slices/SearchSlice";
import { defaultOptions } from "@/entities/SearchOptions";

const ShopDetailArea: React.FC = () => {
  const searchState = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const params = useParams();
  const shopInfo =
    searchState.result && searchState.result.shops.length > 0
      ? searchState.result.shops[0]
      : undefined;
  React.useEffect(() => {
    const id = params.id as string;
    const options = { ...defaultOptions(), id: id };

    dispatch(fetchShopInfo(options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <Box className={styles.section}>
      <SectionHeader text="店舗詳細" />
      {shopInfo ? <ShopDetail shopInfo={shopInfo} /> : undefined}
    </Box>
  );
};

export default ShopDetailArea;
