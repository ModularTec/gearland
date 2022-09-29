import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";

const Filter = ({ allGear }) => {
  const filterNames = [];
  const [filteredGear, setFilteredGear] = useState([]);
  const [filterType, setFilterType] = useState("Pedal");

  const filterByType = (gearArray) => {
    return gearArray.filter((item) => item.type === filterType);
  };

  useEffect(() => {
    setFilteredGear(filterByType(allGear));
  }, [allGear, filterType]);

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
