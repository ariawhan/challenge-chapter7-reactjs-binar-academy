import React, { Component } from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import "./style.css";

const Section = styled.section`
  padding-top: 100px;
  // background-color: #f1f3ff;
`;

const responseGoogle = (response) => {
  console.log(response);
};

class Registration extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div className="container">
          <div class="row justify-content-md-center text-center">
            <div class="col-lg-6">
              <div className="google">
                <div class="card">
                  <div class="card-body mt-3 mb-3">
                    <h4 class="card-title">Register to Binar Cars Rental</h4>
                    <p class="card-text">
                      We just accept registration from google Oauth
                    </p>
                    <GoogleLogin
                      clientId="69658947465-7osqf4m6tf5vea9vobu1r5gu3vpv7c72.apps.googleusercontent.com"
                      buttonText="Login with google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Registration;
