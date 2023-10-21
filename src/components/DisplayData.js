import React from "react";

const DisplayData = ({ firstName, lastName }) => {
  console.log(firstName, lastName);
  return (
    <div>
      <h1>FirstName: {firstName}</h1>
      <h2>LastName: {lastName}</h2>
    </div>
  );
};

export default DisplayData;
