"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "@/components/mainNav/MainNav";
import AccommodationList2 from "@/components/accommodationList/AccommodationList2";

const Accommodations = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://3.35.216.158:8080/api/accommodation?size=10&page=10");
        setAccommodations(response.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MainNav />
      <AccommodationList2 accommodations={accommodations} />
    </>
  );
};

export default Accommodations;

