import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import CartItem from "./CartItem";

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({});

  return (
    <CheckboxContext.Provider value={{ checkedItems, setCheckedItems }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default function CartList({ data, hideCheckbox }) {
  return (
    <CheckboxProvider>
      {data ? (
        data.map((item, index) => (
          <CartItem
            data={item}
            key={index}
            hideCheckbox={hideCheckbox} //체크박스 조건부 렌더링
          />
        ))
      ) : (
        <div>로딩중...</div>
      )}
    </CheckboxProvider>
  );
}

export const useCheckboxContext = () => useContext(CheckboxContext);
