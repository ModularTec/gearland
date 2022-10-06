import React, { useEffect, useState } from "react";
import "./FilterDropdown.css";

function FilterDropdown({ filterChoice, setFilterChoice }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    if (menuOpen === false) setMenuOpen(true);
    else setMenuOpen(false);
  };

  const handleMenuChoice = (event) => {
    event.preventDefault();
    let menuValue = event.target.value;
    setFilterChoice(menuValue);
  };

  return (
    <div>
      <div className="menu-btn open">
        <div className="menu-btn-burger" onClick={handleMenuButtonClick}></div>
      </div>
      {menuOpen ? (
        <div className="filter-box">
          <select size="4" className="filter-menu" onChange={handleMenuChoice}>
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

// <div>
// <select className="filterMenu" onChange={handleMenuChoice}>
//   <option value="All Gear">All Gear</option>
//   <option value="Synthesizer">Synthesizers</option>
//   <option value="Pedal">Pedals</option>
//   <option value="Drum Machine">Drum Machines</option>
//   </select>
// </div>
