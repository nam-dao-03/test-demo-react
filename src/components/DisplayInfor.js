import React from "react";
import UserInfor from "./AddUserInfor";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log('>> call constructor')
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      document.title = 'Nam Nam';
    }, 3000);
    console.log('>>call me component dis mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('>>>call me did update', this.props, prevProps)
    if(this.props.listUsers !== prevProps.listUsers) {
      if(this.props.listUsers.length === 5) {
        alert('You got 5 users')
      }
    }
  }
  
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log('>>> call me render')
    const { listUsers } = this.props;
    //props => viet tat properties
    return (
      <div className="display-infor-container">
        {/* <img src = {logo}/> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? " Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name is {user.name} </div>
                    <div>My age's {user.age} </div>
                  </div>
                  <div>
                    <button onClick = {() => this.props.handleDeleteUser(user.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
            {/* <div>My name is {name}</div>
				<div>My age's {age}</div> */}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
