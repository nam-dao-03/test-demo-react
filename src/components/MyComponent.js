import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  render() {
	//destructuring array/object
	const myAge = 50;
	const myInfor = ['abc', 'bc', 'c'];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name= "Hoi Dan IT" age={30}/>
		<hr />
		<DisplayInfor name= {"Eric"} age={myAge} myInfor = {myInfor}/>
      </div>
    );
  }
}

export default MyComponent;
