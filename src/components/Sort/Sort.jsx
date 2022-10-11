import React, { useState, useEffect } from "react";
import Gear from "../Gear/Gear";

const Sort = ({ filteredGear, sortChoice }) => {
  const [sortedGear, setSortedGear] = useState([]);

  const convertDateToNumber = (dateString) => {
    const removeNonNumbers = (a) => {
      return a.toString().replace(/\D/g, "");
    };
    let cleanedStr = removeNonNumbers(dateString);
    return Number(cleanedStr);
  };

  const sortByAscendingDate = (myGear) => {
    return myGear.sort(
      (a, b) =>
        convertDateToNumber(a.date_added) - convertDateToNumber(b.date_added)
    );
  };

  const sortByDescendingDate = (myGear) => {
    return myGear.sort(
      (a, b) =>
        convertDateToNumber(b.date_added) - convertDateToNumber(a.date_added)
    );
  };

  const sortByAscendingPrice = (myGear) => {
    return myGear.sort((a, b) => a.price - b.price);
  };

  const sortByDescendingPrice = (myGear) => {
    return myGear.sort((a, b) => b.price - a.price);
  };

  const sortChooser = (gearToSort) => {
    let destructuredGear = [...gearToSort];
    if (sortChoice === "date_added V") {
      return sortByDescendingDate(destructuredGear);
    }
    if (sortChoice === "date_added A") {
      return sortByAscendingDate(destructuredGear);
    }
    if (sortChoice === "Price V") {
      return sortByDescendingPrice(destructuredGear);
    }
    if (sortChoice === "Price A") {
      return sortByAscendingPrice(destructuredGear);
    }
  };

  useEffect(() => {
    const newSortedGear = sortChooser(filteredGear);
    setSortedGear(newSortedGear);
  }, [filteredGear, sortChoice]);

  return (
    <div>
      <Gear sortedGear={sortedGear} />
    </div>
  );
};

export default Sort;
