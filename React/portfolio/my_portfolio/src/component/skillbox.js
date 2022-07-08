import React from "react";

const skillbox = (props) => {
  const { name, id } = props;
  return (
    <div>
      <h1>{`Name: ${name}
    TestUnit:${id}`}</h1>
    </div>
  );
};

export default skillbox;
