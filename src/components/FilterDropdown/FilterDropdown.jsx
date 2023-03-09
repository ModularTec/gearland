import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
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

  const handleLinkClick = (event, stateVal) => {
    setMode("");
    setMenuOpen(false);
    if (window.location.pathname !== "/about") {
      setFilterChoice(stateVal);
    }
  };

  return (
    <div>
      <div className="filter-wrapper" ref={ref}>
        <div className="menu-btn" onClick={handleFilterMenuButtonClick}>
          <div className={`menu-btn-burger ${"menu-btn-" + mode}`}></div>
        </div>
        {menuOpen ? (
          <div className="filter-box">
            <div className="filter-menu">
              <Link
                className="menu-link"
                onClick={(e) => {
                  handleLinkClick(e, "All Gear");
                }}
                to="/"
                state={{ filterChoice: "All Gear" }}
              >
                All Gear
              </Link>
              <Link
                className="menu-link"
                onClick={(e) => {
                  handleLinkClick(e, "Synthesizer");
                }}
                to="/"
                state={{ filterChoice: "Synthesizer" }}
              >
                Synthesizers
              </Link>
              <Link
                className="menu-link"
                onClick={(e) => {
                  handleLinkClick(e, "Pedal");
                }}
                to="/"
                state={{ filterChoice: "Pedal" }}
              >
                Pedals
              </Link>
              <Link
                className="menu-link"
                onClick={(e) => {
                  handleLinkClick(e, "Drum Machine");
                }}
                to="/"
                state={{ filterChoice: "Drum Machine" }}
              >
                Drum Machines
              </Link>
              <Link className="menu-link" to="/about">
                About / To Purchase
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;
