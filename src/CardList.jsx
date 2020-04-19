import React from "react";
import Card from "./Card";

const CardList = props => (
  <div>
    {props.profiles.map(userProfile => (
      <Card key={userProfile.id} {...userProfile} />
    ))}
  </div>
);

export default CardList;
