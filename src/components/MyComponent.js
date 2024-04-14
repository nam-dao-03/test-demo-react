import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nam",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick(event) {
    console.log("Click me my button");
    console.log("My name is ", this.state.name)
  }
  handleOnMoverOver(event) {
    console.log(event.pageX)
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver = {this.handleOnMoverOver}>Hover Me</button>
        <button onClick = {this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
