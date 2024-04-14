import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nam",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick = (event) => {
    console.log("Click me my button");
    console.log("Random", Math.floor((Math.random() * 100) + 1))
    this.setState({
      name: "Eric",
    });
    this.setState({
      age: Math.floor((Math.random() * 100) + 1)
    })
  }
  handleOnMoverOver(event) {
    // console.log(event.pageX)
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver = {this.handleOnMoverOver}>Hover Me</button>
        <button onClick = {(event) => {this.handleClick(event)}}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
