import React from "react";

const Square = (props) => {
  // Determine the class based on the value
  const className =
    props.value === "X"
      ? "square x"
      : props.value === "O"
      ? "square o"
      : "square";

  return (
    <div
      onClick={props.onClick}
      className={className} // Apply the class based on the value
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
