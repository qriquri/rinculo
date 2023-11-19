import { Box, SxProps, Theme } from "@mui/material";
import LeafLetMap from "../LeafletMap";
import IShopInfo from "@/entities/ShopInfo";
import styles from "./index.module.css";
import { ReactNode } from "react";
import ShopMapPopup from "./ShopMapPopup";

interface IProps {
  className?: string;
  shopInfo: IShopInfo;
  zoom?: number;
  sx?: SxProps<Theme> | undefined;
  popup?: ReactNode; // 一応カスタマイズ可能にしておきたい
}

const ShopMap: React.FC<IProps> = (props) => {
  return (
    <Box className={props.className} sx={props.sx}>
      <LeafLetMap
        lat={props.shopInfo.lat}
        lng={props.shopInfo.lng}
        zoom={props.zoom}
        popup={props.popup ?? <ShopMapPopup shopInfo={props.shopInfo} />}
      />
    </Box>
  );
};

export default ShopMap;
