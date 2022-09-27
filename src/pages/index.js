import React, { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [allGear, setAllGear] = useState([]);

  // get data from API
  const url = "http://localhost:5000/";

  const getAllGear = () => {
    axios
      .get(`${url}gear`)
      .then((res) => {
        let allGear = res.data;
        console.log(res.data);
        setAllGear(allGear);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllGear();
  }, []);

  return <main>0th index of allGear: {allGear[0].name}</main>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
