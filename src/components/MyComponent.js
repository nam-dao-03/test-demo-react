import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //JSX
  state = {
	listUsers: [
		{id: 1, name: "Hoi Dan IT", age: "16"},
		{id: 2, name: "Eric", age: "26"},
		{id: 3, name: "HaryPhamDev", age: "69"}
	]
  }
  render() {
	//destructuring array/object
	//DRY : don't repeat yourself
	
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor
		 listUsers = {this.state.listUsers}
		 />
		<hr />
      </div>
    );
  }
}

export default MyComponent;
