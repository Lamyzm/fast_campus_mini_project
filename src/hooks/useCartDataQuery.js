import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import authApi from '@/service/axiosConfig';
import { useSession } from 'next-auth/react';


const fetchCart = async () => {
  const { data } = await authApi.get("/cart");
  return data;
};

function useCartDataQuery() {
  const [checkedItems, setCheckedItems] = useState({});
  const [cartDataLength, setCartDataLength] = useState(0);
  const { data, status } = useSession();

  const {
    data: cartData,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isFetching,
  } = useQuery("cartItems", fetchCart, {
    onSuccess: (data) => {
      // 데이터 로딩 성공 후, 체크상태 업데이트
      const newCheckedItems = data.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
      }, {});
      setCheckedItems(newCheckedItems);
    },
    retry: 2,
    enabled: !!data,
  });
  useEffect(() => {
    setCartDataLength(cartData?.length);
  }, [cartData])
  return { checkedItems, setCheckedItems, cartData, isLoading, isError, isSuccess, refetch, isFetching, cartDataLength };
}

export default useCartDataQuery;
