import React from "react";

const Brewery = props => {
  const googleURL = `https://www.google.com/maps/search/?api=1&query=${
    props.brewery.latitude
  },${props.brewery.longitude}`;
  return (
    <div className="brewery-card">
      <h3>{props.brewery.name}</h3>
      <h4>{props.brewery.type}</h4>
      <p>
        {props.brewery.street} <br />
        {props.brewery.city}, {props.brewery.state} {props.brewery.postal_code}
      </p>
      <p>
        ({props.brewery.phone[0]}
        {props.brewery.phone[1]}
        {props.brewery.phone[2]}) {props.brewery.phone[3]}
        {props.brewery.phone[4]}
        {props.brewery.phone[5]}-{props.brewery.phone[6]}
        {props.brewery.phone[7]}
        {props.brewery.phone[8]}
        {props.brewery.phone[9]}
      </p>
      <a href={props.brewery.website_url} target="_blank">
        <button>Visit Website</button>
      </a>
      <a href={googleURL} target="_blank">
        <button>View on Google Maps</button>
      </a>
    </div>
  );
};

export default Brewery;
