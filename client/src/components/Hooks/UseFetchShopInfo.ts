import ISearchOptions, {
  toQueryParam,
} from "@/entities/SearchOptions";
import { useAppDispatch } from "@/redux/hooks";
import { updateSearchOptions } from "@/redux/slices/SearchSlice";
import { useRouter } from "next/navigation";

const useFetchShopInfo = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (options: ISearchOptions) => {
    dispatch(updateSearchOptions(options));
    router.push("/?" + toQueryParam(options));
  };
};

export default useFetchShopInfo
