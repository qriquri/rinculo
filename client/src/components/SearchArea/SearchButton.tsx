import { geoFindMe } from "@/entities/GeoLocation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchShopInfo } from "@/redux/slices/SearchSlice";
import { Button } from "@mui/material";

const SearchButton: React.FC = () => {
  const { isFetching, searchOptions} = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const success = (position: GeolocationPosition) => {
      dispatch(
        fetchShopInfo({
          ...searchOptions,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    };
    const error = (error: GeolocationPositionError) => {
      console.error("位置情報取得失敗");
    };
    geoFindMe(success, error);
  };
  return (
    <Button variant="contained" sx={{ color: "white" }} onClick={handleClick} disabled={isFetching}>
      検索
    </Button>
  );
};

export default SearchButton;
