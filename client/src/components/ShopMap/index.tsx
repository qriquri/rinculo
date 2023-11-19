import { Box, SxProps, Theme } from "@mui/material";
import LeafLetMap from "../LeafLetMap";
import IShopInfo from "@/entities/ShopInfo";
import styles from "./index.module.css";

interface IProps {
  className?: string;
  shopInfo: IShopInfo;
  zoom?: number;
  sx?: SxProps<Theme> | undefined
}

const ShopMap: React.FC<IProps> = (props) => {
  return (
    <Box className={props.className} sx={props.sx}>
      <LeafLetMap
        lat={props.shopInfo.lat}
        lng={props.shopInfo.lng}
        zoom={props.zoom}
      />
    </Box>
  );
};

export default ShopMap;
