import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
	render() {
		const {age, name} = this.props;
		//props => viet tat properties
		return (
			<div>
				<div>My name is {name}</div>
				<div>My age's {age}</div>
			</div>	
		);
	}
}

export default DisplayInfor 