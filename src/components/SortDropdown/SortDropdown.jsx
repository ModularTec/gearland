import React, { useState } from "react";
import "./SortDropdown.css";

const SortDropdown = ({ sortChoice, setSortChoice }) => {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const handleSortMenuButtonClick = () => {
    if (sortMenuOpen === false) setSortMenuOpen(true);
    else setSortMenuOpen(false);
  };

  const handleMenuChoice = (event) => {
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
          <select size="1" className="sort-menu" onChange={handleMenuChoice}>
            <option value="date_added V">Date: Newest</option>
            <option value="date_added A">Date: Oldest</option>
            <option value="Price V">Price: High to Low</option>
            <option value="Price A">Price: Low to High</option>
          </select>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SortDropdown;
