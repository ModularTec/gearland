import React from "react";

function Gear({ allGear }) {
  // const mapGear = (gearList) => {
  //   gearList.map((gear) => <div className="name">{gear.name}</div>);
  // };

  return (
    <div>
      {allGear.map((gear) => (
        <div className="gearItem">
          <div className="name">Name: {gear.name}</div>
          <div className="description">Description: {gear.description}</div>
          <div className="type">Type: {gear.type}</div>
          <div className="quality">Quality: {gear.quality}</div>
          <div className="price">Price: {gear.price}</div>
          <div className="date">Date added: {gear.date_added}</div>
          <div className="available">
            Available: {gear.available.toString()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gear;
