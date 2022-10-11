import React, { useState } from "react";
import "./SortDropdown.css";

const SortDropdown = ({ sortChoice, setSortChoice }) => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const handleSortMenuButtonClick = () => {
    if (sortMenuOpen === false) setSortMenuOpen(true);
    else setSortMenuOpen(false);
  };

  const handleSortMenuChoice = (event) => {
    event.preventDefault();
    let sortMenuValue = event.target.value;
    setSortChoice(sortMenuValue);
  };

  // TODO: close menu if user clicks anything else than the menu

  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 512 512"
        onClick={handleSortMenuButtonClick}
      >
        <g id="icomoon-ignore" fill="white" transform="rotate(90 200 250)">
          <path d="M96 64l320 192-320 192z"></path>
        </g>
      </svg>
      {sortMenuOpen ? (
        <div className="sort-box">
          <select
            size="4"
            className="sort-menu"
            onChange={handleSortMenuChoice}
          >
            <option className="sortOption" value="date_added V">
              Date: Newest
            </option>
            <option className="sortOption" value="date_added A">
              Date: Oldest
            </option>
            <option className="sortOption" value="Price V">
              Price: Highest
            </option>
            <option className="sortOption" value="Price A">
              Price: Lowest
            </option>
          </select>
        </div>
      ) : (
        <div className="sortClosed"></div>
      )}
    </div>
  );
};

export default SortDropdown;
