import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import "./FilterDropdown.css";

function FilterDropdown({ filterChoice, setFilterChoice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState("open");

  // Close menu if user clicks anything other than the menu
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // if menu open and and clicked target is not within menu, close menu
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false);
        setMode("");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // cleanup event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuOpen]);

  const handleFilterMenuButtonClick = () => {
    setMode(mode === "open" ? "" : "open");
    console.log("mode", mode);
    if (menuOpen === false) setMenuOpen(true);
    else setMenuOpen(false);
  };

  const handleLinkClick = (event, stateVal) => {
    setMode("");
    setMenuOpen(false);
    if (window.location.pathname !== "/about") {
      setFilterChoice(stateVal);
    }
  };

  return (
    <div>
      <div className="filter-wrapper" ref={ref}>
        <div className="menu-btn" onClick={handleFilterMenuButtonClick}>
          <div className={`menu-btn-burger ${"menu-btn-" + mode}`}></div>
        </div>
        {menuOpen ? (
          <div className="filter-box">
            <div className="filter-menu">
              <Link
                onClick={(e) => {
                  handleLinkClick(e, "All Gear");
                }}
                to="/"
                state={{ filterChoice: "All Gear" }}
              >
                All Gear
              </Link>
              <Link
                onClick={(e) => {
                  handleLinkClick(e, "Synthesizer");
                }}
                to="/"
                state={{ filterChoice: "Synthesizer" }}
              >
                Synthesizers
              </Link>
              <Link
                onClick={(e) => {
                  handleLinkClick(e, "Pedal");
                }}
                to="/"
                state={{ filterChoice: "Pedal" }}
              >
                Pedals
              </Link>
              <Link
                onClick={(e) => {
                  handleLinkClick(e, "Drum Machine");
                }}
                to="/"
                state={{ filterChoice: "Drum Machine" }}
              >
                Drum Machines
              </Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;

// const handleFilterMenuChoice = (event) => {
//   event.preventDefault();
//   let menuValue = event.target.value;
//   console.log(menuValue);
//   // setmenuValueClick(menuValue);
//   // if (menuValue === "about") {
//   //   window.location.href = "http://localhost:8000/about";
//   //   setOnAbout(true);
//   // }
//   if (window.location.href === "http://localhost:8000/") {
//     window.location.href = `http://localhost:8000/${menuValue}`;
//   }
//   if (window.location.href === "http://localhost:8000/") {
//   } else {
//     window.location.href = "http://localhost:8000";
//   }

//   // if menuValue = about or home, change window location to there
//   // else do the normal menu handling below
//   setFilterChoice(menuValue);
//   setMenuOpen(false);
//   setMode("");
// };

// return (
//   <div>
//     <div className="filter-wrapper" ref={ref}>
//       <div className="menu-btn" onClick={handleFilterMenuButtonClick}>
//         <div className={`menu-btn-burger ${"menu-btn-" + mode}`}></div>
//       </div>
//       {menuOpen ? (
//         <div className="filter-box">
//           <select
//             size="5"
//             className="filter-menu"
//             onChange={handleFilterMenuChoice}
//           >
//             <option value="All Gear">All Gear</option>
//             <option value="Synthesizer">Synthesizers</option>
//             <option value="Pedal">Pedals</option>
//             <option value="Drum Machine">Drum Machines</option>
//             <option value="about">About</option>
//           </select>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   </div>
// );
