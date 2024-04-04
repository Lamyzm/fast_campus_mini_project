import { useEffect, useState } from 'react';
import { Api } from '@/service/api';
import dayjs from 'dayjs';

function useFetchAccommodationRatingData() {
  const [data, setData] = useState("");
  const formattedDateTime = dayjs().add(1, 'week').format("YYYY-MM-DDTHH:mm");

  const fetchData = async (category, area, sort = "rating", discountEndDay = "",) => {
    try {
      const sortOrder = sort === "minPrice" ? "asc" : "desc";
      const result = await Api.get(
        `/accommodation?size=10&category=${category}&area=${area}&discountEndDay=${formattedDateTime}&sort=${sort},${sortOrder}`
      );

      setData(result.data.content);
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };
  return { data, fetchData };
}

export default useFetchAccommodationRatingData;
