import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState();

  return (
    <>
      <div className="vertical"></div>
      <div className="box">
        <div
          onMouseOver={() => setColor("red")}
          className={"red light" + (color === "red" ? " bg-danger  " : "")}
        ></div>
        <div
          onMouseOver={() => setColor("yellow")}
          className={"yellow light" + (color === "yellow" ? " bg-warning" : "")}
        ></div>
        <div
          onMouseOver={() => setColor("green")}
          className={"green light" + (color === "green" ? " bg-success" : "")}
        ></div>
      </div>
    </>
  );
};

export default Home;
