import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";

const Sort = ({ filteredGear, sortChoice }) => {
  const [sortedGear, setSortedGear] = useState([]);

  const sortByDescendingPrice = (gearArray) => {
    return gearArray.sort((a, b) => a.price > b.price);
  };

  const sortByAscendingPrice = (gearArray) => {
    return gearArray.sort((a, b) => a.price < b.price);
  };

  const sortByDescendingDate = (gearArray) => {
    return gearArray.sort((a, b) => a.date_added > b.date_added);
  };

  const sortByAscendingDate = (gearArray) => {
    return gearArray.sort((a, b) => a.date_added < b.date_added);
  };

  const mySortChooser = (gearToSort) => {
    console.log(`sortChoice is ${sortChoice}`);
    if (sortChoice === "date_added V") return sortByDescendingDate(gearToSort);
    if (sortChoice === "date_added A") return sortByAscendingDate(gearToSort);
    if (sortChoice === "Price V") return sortByDescendingDate(gearToSort);
    if (sortChoice === "Price A") return sortByAscendingDate(gearToSort);
  };

  useEffect(() => {
    setSortedGear(mySortChooser(filteredGear));
    console.log("filteredGear::::", filteredGear);
    console.log("sortChoice::::", sortChoice);
  }, [filteredGear, sortChoice]);

  return (
    <div>
      <Gear sortedGear={sortedGear} />
    </div>
  );
};

export default Sort;
