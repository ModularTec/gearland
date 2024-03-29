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
    <header>
      <div className="header-pos">
        <FilterDropdown
          className="filter-dropdown"
          filterChoice={filterChoice}
          setFilterChoice={setFilterChoice}
        />
        <div className="title-style">Gearland</div>
      </div>
    </header>
  );
};

export default Header;
