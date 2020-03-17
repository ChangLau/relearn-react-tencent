import React from "react";

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl: "https://static.imzhiliao.com/health-bg-teacher.png"
};

function Jsx() {
  // 在jsx中嵌入表达式
  // babel会把jsx转义成React.createElement()函数调用
  // 更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
  const name = "Josh Perez";
  // 不起作用
  let time = new Date().toLocaleTimeString();
  setInterval(() => {
    time = new Date().toLocaleTimeString();
  }, 1000);
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h1>Hello, {formatName(user)}</h1>
      <div tabIndex="0"></div>
      <img src={user.avatarUrl}></img>
      <h2>It is {time}.</h2>
    </div>
  );
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

export default Jsx;
