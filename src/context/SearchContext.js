"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';


const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (!searchData) return;
    sessionStorage.setItem('searchData', JSON.stringify(searchData));
  }, [searchData]);


  useEffect(() => {
    const initialState = () => {
      let savedData = null;
      if (typeof window !== "undefined" && window.sessionStorage) {
        savedData = sessionStorage.getItem("searchData");
        if (!savedData) {
          const startDate = dayjs();
          const endDate = dayjs().add(1, "day");
          savedData = {
            date: { startDate: startDate, endDate: endDate },
            headCount: 1,
            area: ''
          }
          return savedData
        }
      }
      return JSON.parse(savedData);
    };
    setSearchData(initialState);
  }, []);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
