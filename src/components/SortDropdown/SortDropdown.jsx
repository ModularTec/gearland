import React, { useEffect, useState, useRef } from "react";
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
    setSortMenuOpen(false);
  };

  // Close menu if user clicks anything other than the menu
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutsideSort = (e) => {
      // if menu open and clicked target is not within menu, close menu
      if (sortMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setSortMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutsideSort);
    return () => {
      // cleanup event listener
      document.removeEventListener("mousedown", checkIfClickedOutsideSort);
    };
  }, [sortMenuOpen]);

  return (
    <div className="sort-wrapper" ref={ref}>
      <svg
        className="sort-svg"
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
