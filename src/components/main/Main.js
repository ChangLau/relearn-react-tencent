import React from "react";
import Component from "../component/Component";
import Jsx from "../learn_jsx/Jsx";
import Comment from "../component/Comment";
import Clock from "../component/Clock";
import Event from "../component/Event";
import Condition from "../component/Condition";
import NumberList from "../component/List";
import Form from "../component/Form";
import ImproveStatus from "../component/ImproveStatus";

const Main = () => {
  const comment = {
    author: {
      name: "ChangLiu",
      avatarUrl: "https://placekitten.com/g/64/64"
    },
    text: "NWSUAF",
    date: new Date()
  };
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <ImproveStatus></ImproveStatus>
      <Form></Form>
      <NumberList numbers={numbers}></NumberList>
      <Condition></Condition>
      <Event></Event>
      <Clock></Clock>
      <Comment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      ></Comment>
      <Component name="liuchang" />
      <Jsx />
    </div>
  );
};

export default Main;
