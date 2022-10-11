import React, { useEffect, useState } from "react";
import "./FilterDropdown.css";

function FilterDropdown({ filterChoice, setFilterChoice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState("open");

  const handleMenuButtonClick = () => {
    setMode(mode === "open" ? "" : "open");
    console.log("mode", mode);
    if (menuOpen === false) setMenuOpen(true);
    else setMenuOpen(false);
  };

  const handleFilterMenuChoice = (event) => {
    event.preventDefault();
    let menuValue = event.target.value;
    setFilterChoice(menuValue);
  };

  // TODO: Close menu if user clicks anything else than the menu

  return (
    <div>
      <div className="menu-btn">
        <div
          className={`menu-btn-burger ${"menu-btn-" + mode}`}
          onClick={handleMenuButtonClick}
        ></div>
      </div>
      {menuOpen ? (
        <div className="filter-box">
          <select
            size="4"
            className="filter-menu"
            onChange={handleFilterMenuChoice}
          >
            <option value="All Gear">All Gear</option>
            <option value="Synthesizer">Synthesizers</option>
            <option value="Pedal">Pedals</option>
            <option value="Drum Machine">Drum Machines</option>
          </select>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FilterDropdown;
