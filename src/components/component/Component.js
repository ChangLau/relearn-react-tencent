import React from "react";

function Welcome(props) {
  return <h1>Hello,{props.name}</h1>;
}

const Header = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
};
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello,{this.props.name}</h1>;
//   }
// }

export default Header;
