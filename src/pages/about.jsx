import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header/Header";
import Filter from "../components/Filter/Filter";
import EmailForm from "../components/EmailForm/EmailForm";
import "./about.css";
// import axios from "axios";
// import index from "./index";
// import Contact from "../components/Contact/Contact";
// import GearTitle from "../components/GearTitle/GearTitle";
// import SortDropdown from "../components/SortDropdown/SortDropdown";
// import FilterDropdown from "../components/FilterDropdown/FilterDropdown";

const About = ({
  filterChoice,
  setFilterChoice,
  sortChoice,
  setSortChoice,
  location,
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
      <div className="about-content">
        <h3>About Us!</h3>
        <div></div>
        <div>
          Here's our gear. Any questions or want to buy something? Contact us
          below: <EmailForm />
        </div>
      </div>
    </main>
  );
};

export default About;
