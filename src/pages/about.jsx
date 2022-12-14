import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Contact from "../components/Contact/Contact";
import GearTitle from "../components/GearTitle/GearTitle";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import "./about.css";
import Index from "./index.js";

const About = ({
  filterChoice,
  setFilterChoice,
  sortChoice,
  setSortChoice,
}) => {
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
      <h3>About Us!</h3>
      <div>WHat's up ya'll</div>
      <Contact />
    </main>
  );
};

export default About;
