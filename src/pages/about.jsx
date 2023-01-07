import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "gatsby";
import index from "./index";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import Contact from "../components/Contact/Contact";
import GearTitle from "../components/GearTitle/GearTitle";
import SortDropdown from "../components/SortDropdown/SortDropdown";
import FilterDropdown from "../components/FilterDropdown/FilterDropdown";
import "./about.css";

// We are running into an issue where About does not
// inherit any state or setState funcs even if it appears to
// in its props

const About = ({
  filterChoice,
  setFilterChoice,
  sortChoice,
  setSortChoice,
  location,
}) => {
  console.log(window.location.href);

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
      <div className="about-content">
        <h3>About Us!</h3>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          Here's my gear. Any questions or want to buy something? Contact me at
          gearland@gmail.com.
        </div>
        <Contact />
      </div>
    </main>
  );
};

export default About;
