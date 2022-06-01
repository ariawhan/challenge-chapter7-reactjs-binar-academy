import React, { Component, useEffect } from "react";
import styled from "styled-components";
import { gapi } from "gapi-script";
import Login from "./components/login";
import Logout from "./components/logout";
import "./style.css";

const Section = styled.section`
  padding-top: 100px;
  // background-color: #f1f3ff;
`;

class Registration extends Component {
  state = {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    googleId: localStorage.getItem("googleId"),
  };

  authGoogle = () => {
    console.log(this.state.email);
    if (this.state.googleId !== null && this.state.googleId !== "") {
      // toUpperCase in frit world
      let name = this.state.name;
      name = name
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(" ");
      return (
        <>
          <Logout
            clientId={this.state.clientId}
            name={name}
            email={this.state.email}
            googleId={this.state.googleId}
            onLogoutDataHandler={this.onLogoutDataHandler}
          ></Logout>
        </>
      );
    } else {
      return (
        <>
          <Login
            onLoginDataHandler={this.onLoginDataHandler}
            clientId={this.state.clientId}
          ></Login>
        </>
      );
    }
  };

  useEffect = () => {
    function start() {
      gapi.client.init({
//         clientId: this.state.clientId,
//         scope: "",
//       });
//     }
//     gapi.load("client:auth2", start);
//   };

//   onLoginDataHandler = (loginData) => {
//     if (loginData.status) {
//       localStorage.setItem("email", loginData.message.profileObj.email);
//       localStorage.setItem("name", loginData.message.profileObj.name);
//       localStorage.setItem("googleId", loginData.message.profileObj.googleId);
//       this.setState({
//         email: loginData.message.profileObj.email,
//         name: loginData.message.profileObj.name,
//         googleId: loginData.message.profileObj.googleId,
//       });
//     } else {
//       console.log(loginData.message);
//     }
//   };

//   onLogoutDataHandler = () => {
//     console.log("Successfully logged out");
//     localStorage.setItem("email", "");
//     localStorage.setItem("name", "");
//     localStorage.setItem("googleId", "");
//     this.setState({
//       email: "",
//       name: "",
//       googleId: "",
//     });
//     return this.authGoogle();
//   };

//   render() {
//     return (
//       <Section>
//         {useEffect}
//         <div className="container">
//           <div class="row justify-content-md-center text-center">
//             <div class="col-lg-6">
//               <div className="google">{this.authGoogle()}</div>
//             </div>
//           </div>
//         </div>
//       </Section>
//     );
//   }
}

export default Registration;
