import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./FilterDropdown.css";

function FilterDropdown({ filterChoice, setFilterChoice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState("open");

  // Close menu if user clicks anything other than the menu
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // if menu open and and clicked target is not within menu, close menu
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
        setMode("");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // cleanup event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuOpen]);

  const handleFilterMenuButtonClick = () => {
    setMode(mode === "open" ? "" : "open");
    console.log("mode", mode);
    if (menuOpen === false) setMenuOpen(true);
    else setMenuOpen(false);
  };

  const handleFilterMenuChoice = (event) => {
    event.preventDefault();

    let menuValue = event.target.value;
    console.log(menuValue);
    if (menuValue === "http://localhost:8000/about") {
      window.location.href = "http://localhost:8000/about";
    }
    // if menuValue = about or home, change window location to there
    // else do the normal menu handling below
    setFilterChoice(menuValue);
    setMenuOpen(false);
    setMode("");
  };

  return (
    <div className="filter-wrapper" ref={ref}>
      <div className="menu-btn" onClick={handleFilterMenuButtonClick}>
        <div className={`menu-btn-burger ${"menu-btn-" + mode}`}></div>
      </div>
      {menuOpen ? (
        <div className="filter-box">
          <select
            size="5"
            className="filter-menu"
            onChange={handleFilterMenuChoice}
          >
            <option value="All Gear">All Gear</option>
            <option value="Synthesizer">Synthesizers</option>
            <option value="Pedal">Pedals</option>
            <option value="Drum Machine">Drum Machines</option>
            <option value="http://localhost:8000/about">About</option>
          </select>
          {/* <ul>
            <li className="nav-links">
              <a href="/">Home</a>
            </li>
            <li className="nav-links">
              <a href="/about">About</a>
            </li>
          </ul> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FilterDropdown;
