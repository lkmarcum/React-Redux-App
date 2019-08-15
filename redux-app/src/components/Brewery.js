import React from "react";

const Brewery = props => {
  return (
    <div className="brewery-card">
      <h4>{props.brewery.name}</h4>
    </div>
  );
};

export default Brewery;
