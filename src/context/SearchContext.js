"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';


const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (!searchData) return;
    sessionStorage.setItem('searchData', JSON.stringify(searchData));
    console.log(searchData);
    console.log(sessionStorage.getItem('searchData'));
  }, [searchData]);

  useEffect(() => {
    const initialState = () => {
      let savedData = null;
      if (typeof window !== "undefined" && window.sessionStorage) {
        savedData = sessionStorage.getItem("searchData");
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
