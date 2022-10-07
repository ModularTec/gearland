import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";

const Sort = ({ filteredGear, sortChoice }) => {
  const [sortedGear, setSortedGear] = useState([]);

  // const sortByDescendingPrice = (gearArray) => {
  //   let sorted = gearArray;
  //   sorted.sort((a, b) => b.price - a.price);
  //   return sorted;
  // };

  // const sortByAscendingPrice = (gearArray) => {
  //   // console.log("sortascendingprice clicked");
  //   let sorted = gearArray;
  //   sorted.sort((a, b) => a.price - b.price);
  //   // console.log(sorted);
  //   return sorted;
  // };

  // const sortByDescendingDate = (gearArray) => {
  //   return gearArray.sort((a, b) => a.date_added - b.date_added);
  // };

  // const sortByAscendingDate = (gearArray) => {
  //   return gearArray.sort((a, b) => b.date_added - a.date_added);
  // };

  const mySortChooser = (gearToSort) => {
    // if (sortChoice === "date_added V") return sortByDescendingDate(gearToSort);
    // if (sortChoice === "date_added A") return sortByAscendingDate(gearToSort);
    // if (sortChoice === "Price V") return sortByDescendingPrice(gearToSort);
    // if (sortChoice === "Price A") return sortByAscendingPrice(gearToSort);
    // const result = await setTimeout(1000, "resolved");
    if (sortChoice === "Price V")
      return gearToSort.sort((a, b) => b.price - a.price);
    if (sortChoice === "Price A")
      return gearToSort.sort((a, b) => a.price - b.price);
    // result = await setTimeout(1000, "resolved");
  };

  useEffect(() => {
    const newSortedGear = mySortChooser(filteredGear);
    setSortedGear(newSortedGear);
  }, [filteredGear, sortChoice]);

  // console.log(sortedGear);
  return (
    <div>
      <Gear sortedGear={sortedGear} />
    </div>
  );
};

export default Sort;
