import React from "react";

const TheJoke = ({ joke, viceList }) => {
  return (
    <div className="joke">
      <h3>{joke?.setup}</h3>
      <h2>{joke?.punchline}</h2>
    </div>
  );
};

export default TheJoke;
