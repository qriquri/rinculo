import { Toolbar, Box, Typography, Button } from "@mui/material";
import styles from "./ToolBar.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { FETCH_NUM_UNIT, toQueryParam } from "@/entities/SearchOptions";
import { useRouter } from "next/navigation";
import { updateSearchOptions } from "@/redux/slices/SearchSlice";

const CustomToolBar: React.FC = () => {
  const router = useRouter();
  const searchState = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const totalNum = searchState.result?.totalNum ?? 0;
  const startNum = searchState.result?.start ?? 0;
  const endNum = searchState.result?.shops
    ? startNum + searchState.result?.shops.length - 1
    : 0;
  const isFirstPage = startNum <= FETCH_NUM_UNIT;
  const isFinalPage = endNum >= totalNum;

  const handleClickBack = () => {
    if (isFirstPage) {
      return;
    }
    dispatch(
      updateSearchOptions({
        ...searchState.searchOptions,
        start: startNum - FETCH_NUM_UNIT,
      })
    );
    router.push(
      "/?" +
        toQueryParam({
          ...searchState.searchOptions,
          start: startNum - FETCH_NUM_UNIT,
        })
    );
  };

  const handleClickNext = () => {
    if (isFinalPage) {
      return;
    }
    dispatch(
      updateSearchOptions({
        ...searchState.searchOptions,
        start: startNum + FETCH_NUM_UNIT,
      })
    );
    router.push(
      "/?" +
        toQueryParam({
          ...searchState.searchOptions,
          start: startNum + FETCH_NUM_UNIT,
        })
    );
  };

  return (
    <Toolbar sx={{ justifyContent: "space-between", padding: "0 0.4rem" }}>
      <Box className={styles.leftContainer}>
        <Box className={styles.totalNum}>
          <Typography
            fontWeight="bold"
            variant="h6"
            sx={{ color: "primary.main" }}
          >
            {totalNum}
          </Typography>
          <Typography>件</Typography>
        </Box>
        <Box className={styles.pager}>
          <Typography fontWeight="bold">
            {startNum}~{endNum}
          </Typography>
          <Typography variant="caption">件を表示</Typography>
        </Box>
      </Box>
      <Box className={styles.rightContainer}>
        <Button
          className={styles.button}
          variant="contained"
          color="inherit"
          onClick={handleClickBack}
          disabled={searchState.isFetching || isFirstPage}
        >
          前へ
        </Button>
        <Button
          className={styles.button}
          variant="contained"
          color="inherit"
          onClick={handleClickNext}
          disabled={searchState.isFetching || isFinalPage}
        >
          次へ
        </Button>
      </Box>
    </Toolbar>
  );
};

export default CustomToolBar;
