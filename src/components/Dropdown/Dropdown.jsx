import React, { useEffect, useState } from "react";

function Dropdown({ filterChoice, setFilterChoice }) {
  const filterNames = ["Synthesizer", "Pedal", "Drum Machine"];

  const handleMenuChoice = (event) => {
    event.preventDefault();
    let menuValue = event.target.value;
    setFilterChoice(menuValue);
    console.log(`You clicked on a menu item ${menuValue}`);
  };

  return (
    <div>
      <select onChange={handleMenuChoice}>
        <option value="All Gear">All Gear</option>
        <option value="Synthesizer">Synthesizers</option>
        <option value="Pedal">Pedals</option>
        <option value="Drum Machine">Drum Machines</option>
      </select>
    </div>
  );
}

export default Dropdown;
