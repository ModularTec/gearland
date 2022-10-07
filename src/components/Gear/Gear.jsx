import React from "react";
import "./Gear.css";

const Gear = ({ sortedGear }) => {
  console.log("Here is sorted gear:", sortedGear);
  return (
    <div className="all-gear">
      {sortedGear.map((gear) => (
        <div className="gearItem-pos gearItem-style">
          <div className="gearItemName-style">{gear.name}</div>
          <div className="description">Description: {gear.description}</div>
          <div className="type">Type: {gear.type}</div>
          <div className="quality">Quality: {gear.quality}</div>
          <div className="price">Price: ${gear.price}</div>
          <div className="date">Date added: {gear.date_added.slice(0, 10)}</div>
          <div className="available">
            Available: {gear.available.toString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gear;
