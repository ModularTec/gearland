import React from "react";
import "./GearTitle.css";

const GearTitle = ({ filterChoice }) => {
  return (
    <div>
      {filterChoice === "All Gear" && (
        <div className="filter-title">All Gear</div>
      )}
      {filterChoice === "Synthesizer" && (
        <div className="filter-title">Synthesizers</div>
      )}
      {filterChoice === "Pedal" && <div className="filter-title">Pedals</div>}
      {filterChoice === "Drum Machine" && (
        <div className="filter-title">Drum Machines</div>
      )}
    </div>
  );
};

export default GearTitle;
