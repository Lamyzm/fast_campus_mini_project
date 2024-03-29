import React, {
  useState,
  useEffect,
  createContext,
  useId,
  useContext,
} from "react";
import axios from "axios";
import CartItem from "./CartItem";
import authApi from "@/service/axiosConfig";

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({});

  return (
    <CheckboxContext.Provider value={{ checkedItems, setCheckedItems }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default function CartList() {
  const [data, setData] = useState([]);
  const id = useId();

  console.log(data);
  useEffect(() => {
    const init = async () => {
      try {
        const result = await authApi.get("/cart");
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생:", error);
      }
    };
    init();
  }, []);
  useEffect(() => {
    const init = async () => {
      try {
        const result = await authApi.get(
          "http://3.35.216.158:8080/api/accommodation?area=서울&category=호텔"
        );
        // setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생:", error);
      }
    };
    init();
  }, []);
  console.log(id);
  return (
    <>
      <CheckboxProvider>
        {data ? (
          data.map((item, index) => (
            <CartItem
              data={item}
              key={`${index + 1}-${id}`}
              index={`${index + 1}-${id}`}
            />
          ))
        ) : (
          <div>로딩중...</div>
        )}
      </CheckboxProvider>
    </>
  );
}
export const useCheckboxContext = () => useContext(CheckboxContext);
