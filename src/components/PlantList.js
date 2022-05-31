import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  useEffect(() => {
    fetch("http://localhost:6001")
    .then((e) => e.json())
    .then(setData);
  }, []);

  return (
    <ul className="cards">
      <p>{id}</p>
      <p>{name}</p>
      <img>{image}</img>
      <p>{price}</p>
    </ul>
  );
}

export default PlantList;
