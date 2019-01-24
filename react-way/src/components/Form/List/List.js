import React from "react";

const List = props => {
  console.log(props);

  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
    </div>
  );
};

export default List;
