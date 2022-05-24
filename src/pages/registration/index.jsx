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
    clientId:
      "69658947465-7osqf4m6tf5vea9vobu1r5gu3vpv7c72.apps.googleusercontent.com",
  };

  useEffect = () => {
    function start() {
      gapi.client.init({
        clientId: this.state.clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  };

  render() {
    return (
      <Section>
        <div className="container">
          <div class="row justify-content-md-center text-center">
            <div class="col-lg-6">
              <div className="google">
                <Login clientId={this.state.clientId}></Login>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Registration;
