import React from "react";
import "./Gear.css";

const underToSpace = (s) => {
  return s.replaceAll("_", " ");
};

const spaceToUnder = (s) => {
  return s.replaceAll(" ", "_");
};

const Gear = ({ sortedGear }) => {
  if (sortedGear.length === 0) {
    return <div></div>;
  } else
    return (
      <div className="all-gear-container">
        <div className="all-gear">
          {sortedGear.map((gear) => (
            <div className="gear-container">
              <div className="gear-item-pos gear-item-style">
                <img
                  className="gear-item-image"
                  src={`../../../${spaceToUnder(gear.name)}.jpg`}
                />
                <div className="gear-texts">
                  <div className="gear-item-name-style">
                    {underToSpace(gear.name)}
                  </div>
                  <div className="gear-item-descr">
                    Description: {gear.description}
                  </div>
                  <div className="type">Type: {gear.type}</div>
                  <div className="quality">Quality: {gear.quality}</div>
                  <div className="price">Price: ${gear.price}</div>
                  <div className="date">
                    Date added: {gear.date_added.slice(0, 10)}
                  </div>
                  <div className="available">
                    Available: {gear.available.toString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Gear;
