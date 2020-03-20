import React, { Fragment } from "react";

const ListItem = props => {
  return (
    <Fragment>
      {/* also can like this <></> */}
      <li>{props.item.term}</li>
      <li>{props.item.description}</li>
    </Fragment>
  );
};

const Glossary = () => {
  const List = [
    {
      id: 1,
      term: "No.1",
      description: "第一学期"
    },
    {
      id: 2,
      term: "No.2",
      description: "第二学期"
    }
  ];
  return (
    <ul>
      {List.map(item => (
        <ListItem item={item} key={item.id}></ListItem>
      ))}
    </ul>
  );
};

export default Glossary;
