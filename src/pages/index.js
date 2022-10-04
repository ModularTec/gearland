import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import FilterDropdown from "../components/FilterDropdown/FilterDropdown";
import Sort from "../components/Sort/Sort";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import Gear from "../components/Gear/Gear";
import "./index.css";

const IndexPage = () => {
  const [allGear, setAllGear] = useState([]);

  // get data from API
  const url = "http://localhost:5000/";

  const getAllGear = () => {
    axios
      .get(`${url}gear`)
      .then((res) => {
        let allGear = res.data;
        setAllGear(allGear);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllGear();
  }, []);

  const [filterChoice, setFilterChoice] = useState("All Gear");

  useEffect(() => {
    console.log("indexFilterChoice--- ", filterChoice);
  }, [filterChoice]);

  const [sortChoice, setSortChoice] = useState("date_added V");

  useEffect(() => {
    console.log("indexsortedGear--- ", sortChoice);
  }, [sortChoice]);

  return (
    <main className="main">
      <div className="nav-area-pos nav-area-style">
        <FilterDropdown
          filterChoice={filterChoice}
          setFilterChoice={setFilterChoice}
        />
        <Header />
        <SortDropdown sortChoice={sortChoice} setSortChoice={setSortChoice} />
      </div>
      <Filter
        allGear={allGear}
        filterChoice={filterChoice}
        sortChoice={sortChoice}
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
