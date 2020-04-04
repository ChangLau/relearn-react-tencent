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
import Combination from "../component/Combination";
import LittleProject from "../component/LittleProject";
import Fragment from "../component/Fragment";
import MyComponent from "../component/lazy/MyComponent";
import Context from "../component/context/Context";
import App from "../component/dynamic-theme/app";
import MyErrorBoundary from "../component/lazy/MyErrorBoundary";
import Refs from "../component/refs/refs";
import Table from "../component/fragments/Table";
import MainInput from "../component/hoc/main-input";
import WordAdder from "../component/word/WordAdder";
import Portals from "../component/portals/portals";
// import "../component/portals/Parent.js";
import TodoApp from "../todo-list/TodoApp";
import AsyncAdd from "../async-example/Async-Add";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const Main = () => {
  const comment = {
    author: {
      name: "ChangLiu",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
    text: "NWSUAF",
    date: new Date(),
  };
  const numbers = [1, 2, 3, 4, 5];

  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  return (
    <Router>
      <MyErrorBoundary>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/asyncAdd">asyncAdd</Link>
              </li>
              <li>
                <Link to="/todoApp">todoApp</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/asyncAdd">
              <AsyncAdd></AsyncAdd>
            </Route>
            <Route path="/todoApp">
              <TodoApp></TodoApp>
            </Route>
            <Route path="/">
              {/* 渲染在指定DOM节点 */}
              <Portals>
                <div>shadow</div>
              </Portals>
              <WordAdder></WordAdder>
              <MainInput></MainInput>
              <Table></Table>
              <Refs></Refs>
              <App></App>
              <Context></Context>
              <MyComponent></MyComponent>
              <Fragment></Fragment>
              <LittleProject products={PRODUCTS}></LittleProject>
              <Combination></Combination>
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
            </Route>
          </Switch>
        </div>
      </MyErrorBoundary>
    </Router>
  );
};

export default Main;
