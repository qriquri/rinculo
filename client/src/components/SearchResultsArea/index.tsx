import { Box, List } from "@mui/material";
import * as React from "react";
import SectionHeader from "@/components/SectionHeader";
import styles from "./index.module.css";
import CustomToolBar from "./ToolBar";
import ShopListItem from "./ShopListItem";

const ShopList = [
  {
    id: "J001127301",
    name: "肉バル DENNER ROIN",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "上本町駅より徒歩3分、谷町九丁目駅より徒歩8分",
    mobile_access: "上本町駅より徒歩3分､谷町九丁目駅より徒歩8分",
    urls: { pc: "https://www.hotpepper.jp/strJ001127301/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_100.jpg",
      },
    },
  },
  {
    id: "J001170154",
    name: "MILLE FIORI ミッレ フィオーリ",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど大阪上本町駅から339m",
    mobile_access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど",
    urls: { pc: "https://www.hotpepper.jp/strJ001170154/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_100.jpg",
      },
    },
  },
  {
    id: "J001127301",
    name: "肉バル DENNER ROIN",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "上本町駅より徒歩3分、谷町九丁目駅より徒歩8分",
    mobile_access: "上本町駅より徒歩3分､谷町九丁目駅より徒歩8分",
    urls: { pc: "https://www.hotpepper.jp/strJ001127301/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_100.jpg",
      },
    },
  },
  {
    id: "J001170154",
    name: "MILLE FIORI ミッレ フィオーリ",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど大阪上本町駅から339m",
    mobile_access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど",
    urls: { pc: "https://www.hotpepper.jp/strJ001170154/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_100.jpg",
      },
    },
  },
  {
    id: "J001127301",
    name: "肉バル DENNER ROIN",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "上本町駅より徒歩3分、谷町九丁目駅より徒歩8分",
    mobile_access: "上本町駅より徒歩3分､谷町九丁目駅より徒歩8分",
    urls: { pc: "https://www.hotpepper.jp/strJ001127301/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/54/48/P029055448/P029055448_100.jpg",
      },
    },
  },
  {
    id: "J001170154",
    name: "MILLE FIORI ミッレ フィオーリ",
    logo_image:
      "https://imgfp.hotp.jp/SYS/cmn/images/common/diary/custom/m30_img_noimage.gif",
    access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど大阪上本町駅から339m",
    mobile_access: "大阪上本町駅/谷町九丁目駅より徒歩5分ほど",
    urls: { pc: "https://www.hotpepper.jp/strJ001170154/?vos=nhppalsa000016" },
    photo: {
      pc: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_238.jpg",
        m: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_58_s.jpg",
      },
      mobile: {
        l: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_168.jpg",
        s: "https://imgfp.hotp.jp/IMGH/39/81/P040733981/P040733981_100.jpg",
      },
    },
  },
];

const SearchResultsArea: React.FC = () => {
  return (
    <React.Fragment>
      <Box className={styles.section}>
        <Box className={styles.wrapper}>
          <SectionHeader text="検索結果" />
          <CustomToolBar totalNum={10000} start={2100} end={2120} />
        </Box>
      </Box>
      <List className={styles.resultList}>
        {ShopList.map((item, index) => {
          return (
            <ShopListItem
              key={index}
              imgUrl={item.photo.mobile.l}
              shopName={item.name}
              access={item.access}
            />
          );
        })}
      </List>
      <Box className={styles.section}>
        <Box className={styles.wrapper}>
          <CustomToolBar totalNum={10000} start={2100} end={2120} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SearchResultsArea;
