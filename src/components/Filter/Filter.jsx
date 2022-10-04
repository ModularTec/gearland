import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";
import Sort from "../Sort/Sort";
import "./Filter.css";

const Filter = ({ allGear, filterChoice, sortChoice }) => {
  const [filteredGear, setFilteredGear] = useState([]);
  // const [filterType, setFilterType] = useState("Pedal");

  const filterByType = (gearArray) => {
    // console.log("filterByType after sortChoiceClicked:::", gearArray);
    if (filterChoice === "All Gear") return gearArray;
    else return gearArray.filter((item) => item.type === filterChoice);
  };

  useEffect(() => {
    setFilteredGear(filterByType(allGear));
    console.log("sortChoiceclicked FILTER::::", sortChoice);
  }, [allGear, filterChoice, sortChoice]);

  return (
    <div>
      <Sort filteredGear={filteredGear} sortChoice={sortChoice} />
    </div>
  );
};

export default Filter;
