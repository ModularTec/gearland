import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Dropdown from "../components/Dropdown/Dropdown";
import Filter from "../components/Filter/Filter";
import Gear from "../components/Gear/Gear";

const IndexPage = () => {
  const [allGear, setAllGear] = useState([]);

  // get data from API
  const url = "http://localhost:5000/";

  const getAllGear = () => {
    axios
      .get(`${url}gear`)
      .then((res) => {
        let allGear = res.data;
        // console.log(res.data);
        setAllGear(allGear);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllGear();
  }, []);

  const [filterChoice, setFilterChoice] = useState("All Gear");

  useEffect(() => {
    console.log("indexFilterChoice--- ", filterChoice);
  }, [filterChoice]);

  return (
    <main>
      <Header />
      <Dropdown filterChoice={filterChoice} setFilterChoice={setFilterChoice} />
      <Filter allGear={allGear} filterChoice={filterChoice} />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
