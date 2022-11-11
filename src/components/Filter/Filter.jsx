import React, { useState, useEffect } from "react";
import Sort from "../Sort/Sort";

const Filter = ({ allGear, filterChoice, sortChoice }) => {
  const [filteredGear, setFilteredGear] = useState([]);

  const filterByType = (gearArray) => {
    if (filterChoice === "All Gear") return gearArray;
    else return gearArray.filter((item) => item.type === filterChoice);
  };

  useEffect(() => {
    setFilteredGear(filterByType(allGear));
  }, [allGear, filterChoice, sortChoice]);

  return (
    <div>
      <Sort filteredGear={filteredGear} sortChoice={sortChoice} />
    </div>
  );
};

export default Filter;
