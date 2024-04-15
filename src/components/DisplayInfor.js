import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

  state = {
    isShowListUser : true,
  }
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser
    })
  }
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    //props => viet tat properties
    return (
      <div className = 'display-infor-container'>
        <img src = {logo}/>
        <div>
          <span onClick = {()=> {this.handleShowHide()}}>
            {this.state.isShowListUser === true ? " Hide list users" : "Show list users"}
            </span>
        </div>
        { this.state.isShowListUser && 
        <div>
        {listUsers.map((user) => {
          console.log(">>> check user", user);
              return (
                <div key={user.id} className = {+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name} </div>
                  <div>My age's {user.age} </div>
                </div>
              );
        })}
        {/* <div>My name is {name}</div>
				<div>My age's {age}</div> */}
        </div>
        }
      </div>
    );
  }
}

export default DisplayInfor;
