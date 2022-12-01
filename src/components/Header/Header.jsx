import React from "react";
import "./Header.css";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import SortDropdown from "../SortDropdown/SortDropdown";

const Header = ({
  filterChoice,
  setFilterChoice,
  sortChoice,
  setSortChoice,
}) => {
  return (
    <div className="header-pos">
      <FilterDropdown
        className="filter-dropdown"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <div className="title-style">Gearland</div>
    </div>
  );
};

export default Header;
