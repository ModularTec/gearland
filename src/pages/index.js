import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Contact from "../components/Contact/Contact";
import GearTitle from "../components/GearTitle/GearTitle";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import "./index.css";

const Index = ({ location }) => {
  // STATES
  const [allGear, setAllGear] = useState([]);
  const [filterChoice, setFilterChoice] = useState("All Gear");
  const [sortChoice, setSortChoice] = useState("date_added V");

  // get data from API
  const url = "/gear";
  const getAllGear = () => {
    console.log("getAllGear was called");
    axios
      .get(`${url}`)
      .then((res) => {
        let allGear = res.data;
        console.log(`allGear: ${allGear}`);
        setAllGear(allGear);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    console.log("useEffect was called");
    getAllGear();
    // if no state is passed to Index, set to "All Gear"
    // else set to the passed filterChoice
    if (location.state === null) {
      setFilterChoice("All Gear");
    } else setFilterChoice(location.state.filterChoice);
  }, []);

  console.log("This is a console.log that should run");

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
