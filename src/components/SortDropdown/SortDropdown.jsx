import React, { useEffect, useState } from "react";
import "./SortDropdown.css";

const SortDropdown = ({ sortChoice, setSortChoice }) => {
  const handleMenuChoice = (event) => {
    event.preventDefault();
    let sortMenuValue = event.target.value;
    setSortChoice(sortMenuValue);
    console.log(`You chose to sort by ${sortMenuValue}`);
  };

  return (
    <div>
      <select className="sortMenu" onChange={handleMenuChoice}>
        <option value="date_added V">Date: Newest</option>
        <option value="date_added A">Date: Oldest</option>
        <option value="Price V">Price: High to Low</option>
        <option value="Price A">Price: Low to High</option>
      </select>
    </div>
  );
};

export default SortDropdown;
