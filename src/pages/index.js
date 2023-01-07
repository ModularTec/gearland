import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Contact from "../components/Contact/Contact";
import GearTitle from "../components/GearTitle/GearTitle";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import "./index.css";
import { Link } from "gatsby";

const Index = ({ location }) => {
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

  useEffect(() => {
    getAllGear();
    setFilterChoice(location.state.filterChoice);
  }, [filterChoice]);

  return (
    <main className="main">
      <div className="nav-area-pos nav-area-style">
        <Header
          filterChoice={filterChoice}
          setFilterChoice={setFilterChoice}
          sortChoice={sortChoice}
          setSortChoice={setSortChoice}
        />
      </div>
      <div className="gear-and-sort-box">
        <div className="gear-and-sort">
          <GearTitle filterChoice={filterChoice} />
          <SortDropdown
            className="sort-dropdown"
            sortChoice={sortChoice}
            setSortChoice={setSortChoice}
          />
        </div>
      </div>
      <Filter
        allGear={allGear}
        filterChoice={filterChoice}
        sortChoice={sortChoice}
      />
      <Contact />
      <about setFilterChoice={setFilterChoice} />
    </main>
  );
};

export default Index;
