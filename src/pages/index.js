import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import FilterDropdown from "../components/FilterDropdown/FilterDropdown";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import Gear from "../components/Gear/Gear";
import Contact from "../components/Contact/Contact";
import "./index.css";

const IndexPage = () => {
  // STATES
  const [allGear, setAllGear] = useState([]);
  const [filterChoice, setFilterChoice] = useState("All Gear");
  const [sortChoice, setSortChoice] = useState("date_added V");

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

  // Should we use onMount()?
  useEffect(() => {
    getAllGear();
  }, []);

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
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
