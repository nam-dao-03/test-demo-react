import React, { useEffect, useState } from "react";
import UserInfor from "./AddUserInfor";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfor extends React.Component {

//   render() {
//     console.log('>>> call me render')
//     const { listUsers } = this.props;
//     //props => viet tat properties
//     return (
//       <div className="display-infor-container">

//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name is {user.name} </div>
//                     <div>My age's {user.age} </div>
//                   </div>
//                   <div>
//                     <button onClick = {() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                   </div>
//                 </div>
//               );
//             })}
//             {/* <div>My name is {name}</div>
// 				<div>My age's {age}</div> */}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> call me render");
  useEffect(() => {
    if(listUsers.length === 0) {
      alert('You deleted all the users')
    }
    console.log(">>> call me useEffect");
  }, [listUsers]);
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list user" : "Show list User"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name} </div>
                  <div>My age's {user.age} </div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
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
};
export default DisplayInfor;
