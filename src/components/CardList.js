import React from "react";
import Card from "./Card";

const CardList = ({ cats }) => {
  // if (true) {
  //   throw new Error("Test Error");
  // }

  return (
    <div>
      {cats.map((cat) => (
        <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} username={cat.username} />
      ))}
    </div>
  );
};

export default CardList;
