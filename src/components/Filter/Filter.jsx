import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";

const Filter = ({ allGear, filterChoice }) => {
  const [filteredGear, setFilteredGear] = useState([]);
  // const [filterType, setFilterType] = useState("Pedal");

  const filterByType = (gearArray) => {
    if (filterChoice === "All Gear") return gearArray;
    else return gearArray.filter((item) => item.type === filterChoice);
  };

  useEffect(() => {
    setFilteredGear(filterByType(allGear));
  }, [allGear, filterChoice]);

  return (
    <div>
      <Gear filteredGear={filteredGear} />
    </div>
  );
};

export default Filter;

// - Synthesizers
// - Drum Machines
// - Pedal
// - Eurorack
// - Misc.
