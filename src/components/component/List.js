import React from "react";

const ListItem = props => {
  return <li>{props.value}</li>;
};

const NumberList = props => {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number => (
        // key 会传递信息给 React ，但不会传递给你的组件。
        <ListItem key={number} value={number}></ListItem>
      ))}
    </ul>
  );
};

export default NumberList;
