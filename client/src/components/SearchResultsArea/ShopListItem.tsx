/* eslint-disable @next/next/no-img-element */
import { Box, ListItemButton, Typography } from "@mui/material";
import * as React from "react";
import styles from "./ShopListItem.module.css";

interface IProps {
  id: string;
  imgUrl: string;
  shopName: string;
  access: string;
  onClick: (id: string) => void;
}

const ShopListItem: React.FC<IProps> = (props) => {
  const handleClick = () => props.onClick(props.id);
  return (
    <ListItemButton
      className={styles.wrapper}
      sx={{ bgcolor: "secondary.main" }}
      onClick={handleClick}
    >
      <Box className={styles.leftContainer}>
        <img src={props.imgUrl} alt="shop-image" width={100} height={100} />
      </Box>
      <Box className={styles.rightContainer}>
        <Box>
          <Typography
            fontWeight="bold"
            variant="h6"
            sx={{ color: "primary.main" }}
          >
            {props.shopName}
          </Typography>
        </Box>
        <Box className={styles.access}>
          <Typography fontWeight="bold" variant="caption">
            アクセス
          </Typography>
          <Typography className={styles.accessText} variant="caption">
            {props.access}
          </Typography>
        </Box>
      </Box>
    </ListItemButton>
  );
};

export default ShopListItem;
