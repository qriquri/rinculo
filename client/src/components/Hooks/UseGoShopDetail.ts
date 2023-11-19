import { useRouter } from "next/navigation";

const useFetchShopDetail = () => {
  const router = useRouter();

  return (id: string) => {
    router.push("/" + id);
  };
};

export default useFetchShopDetail;
