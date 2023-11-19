import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./ShopMapPopup.module.css";
import IShopInfo, { getCatchCopy } from "@/entities/ShopInfo";

interface IProps {
  shopInfo: IShopInfo;
}

const ShopMapPopup: React.FC<IProps> = (props) => {
  return (
    <ListItem alignItems="flex-start" className={styles.wrapper}>
      <ListItemAvatar>
        <Avatar alt={props.shopInfo.name + 'イメージ画像'} src={props.shopInfo.photo.mobile.l} />
      </ListItemAvatar>
      <ListItemText
        primary={props.shopInfo.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.shopInfo.genre.name}
            </Typography>
            {` — ${getCatchCopy(props.shopInfo)}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default ShopMapPopup;
