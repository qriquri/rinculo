/* eslint-disable @next/next/no-img-element */
import { Box, ListItem, Typography } from "@mui/material";
import * as React from "react";
import styles from "./ShopDetail.module.css";
import IShopInfo from "@/entities/ShopInfo";

interface IProps {
  shopInfo: IShopInfo;
}

const ShopDetail: React.FC<IProps> = (props) => {
  return (
    <ListItem
      className={styles.wrapper}
      sx={{ bgcolor: "secondary.main" }}
    >
      <Box className={styles.topWrapper}>
        <Box className={styles.leftContainer}>
          <img
            src={props.shopInfo.photo.mobile.l}
            alt="shop-image"
            width={100}
            height={100}
          />
        </Box>
        <Box className={styles.rightContainer}>
          <Box>
            <Typography variant="caption">{props.shopInfo.catch}</Typography>
            <Typography
              fontWeight="bold"
              variant="h6"
              sx={{ color: "primary.main" }}
            >
              {props.shopInfo.name}
            </Typography>
          </Box>
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
      </Box>
    </ListItem>
  );
};

export default ShopDetail;
