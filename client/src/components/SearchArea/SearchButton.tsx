import { geoFindMe } from "@/entities/GeoLocation";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@mui/material";
import useGoShopSearchResult from "../Hooks/UseGoShopSearchResult";

const SearchButton: React.FC = () => {
  const { isFetching, searchOptions } = useAppSelector((state) => state.search);
  const goResult = useGoShopSearchResult();
  const handleClick = () => {
    const success = (position: GeolocationPosition) => {
      goResult({
        ...searchOptions,
        start: 1,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
    const error = (error: GeolocationPositionError) => {
      console.error("位置情報取得失敗");
    };
    geoFindMe(success, error);
  };
  return (
    <Button
      variant="contained"
      sx={{ color: "white" }}
      onClick={handleClick}
      disabled={isFetching}
    >
      検索
    </Button>
  );
};

export default SearchButton;
