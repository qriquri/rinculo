/* eslint-disable @next/next/no-img-element */
import { Box, ListItem, Typography } from "@mui/material";
import * as React from "react";
import styles from "./ShopDetail.module.css";
import IShopInfo, { getCatchCopy } from "@/entities/ShopInfo";
import ShopMap from "../uiParts/ShopMap";

interface IProps {
  shopInfo: IShopInfo;
}

const DEFAULT_MAP_ZOOM = 17;
const THUMBNAIL_WIDTH = 100;
const THUMBNAIL_HEIGHT = 100;

const ShopDetail: React.FC<IProps> = (props) => {
  return (
    <ListItem className={styles.wrapper} sx={{ bgcolor: "secondary.main" }}>
      <Box className={styles.topWrapper}>
        <Box className={styles.leftContainer}>
          <img
            src={props.shopInfo.photo.mobile.l}
            alt="shop-image"
            width={THUMBNAIL_WIDTH}
            height={THUMBNAIL_HEIGHT}
          />
        </Box>
        <Box className={styles.rightContainer}>
          <Typography
            variant="caption"
            component="div"
            color="primary"
            fontWeight="bold"
          >
            {props.shopInfo.genre.name}
          </Typography>
          <Typography variant="caption" component="div">
            {getCatchCopy(props.shopInfo)}
          </Typography>
          <Typography
            fontWeight="bold"
            variant="h6"
            sx={{ color: "primary.main" }}
          >
            {props.shopInfo.name}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.infoWrapper}>
        <Box className={styles.subsection}>
          <Typography fontWeight="bold" variant="caption">
            アクセス
          </Typography>
          <Typography className={styles.subsectionText} variant="caption">
            {props.shopInfo.access}
          </Typography>
        </Box>
        <Box className={styles.subsection}>
          <Typography fontWeight="bold" variant="caption">
            営業時間欄
          </Typography>
          <Typography className={styles.subsectionText} variant="caption">
            {props.shopInfo.open}
          </Typography>
        </Box>
        <Box className={styles.subsection}>
          <Typography fontWeight="bold" variant="caption">
            周辺地図
          </Typography>
          <Typography className={styles.subsectionText} variant="caption">
            <ShopMap
              shopInfo={props.shopInfo}
              sx={{ height: "20rem" }}
              zoom={DEFAULT_MAP_ZOOM}
            />
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default ShopDetail;
