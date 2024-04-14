import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
	render() {
		const {listUsers} = this.props;
		console.log(listUsers)
		//props => viet tat properties
		return (
			<div>
				{ listUsers.map((user) => {
					return (
						<div key = {user.id}>
							<div>My name is {user.name} </div>
							<div>My age's {user.age} </div>
						</div>
					);
				})}
				{/* <div>My name is {name}</div>
				<div>My age's {age}</div> */}
			</div>	
		);
	}
}

export default DisplayInfor 