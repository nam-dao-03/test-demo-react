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
      age: Math.floor((Math.random() * 100) + 1)
    });
    // this.setState({
    //   age: Math.floor((Math.random() * 100) + 1)
    // })
  }
  handleOnMoverOver(event) {
    // console.log(event.pageX)
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    alert('me')
    console.log(this.state)
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit = {(event) => this.handleOnSubmit(event)}>
          <input
           type="text" 
          onChange= {(event) => this.handleOnChangeInput(event)}
           />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
