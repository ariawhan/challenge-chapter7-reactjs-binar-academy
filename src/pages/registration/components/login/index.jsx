import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
class Login extends Component {
  state = { clientId: this.props.clientId };
  responseGoogle = (response) => {
    if (response.Ca !== undefined) {
      const data = { status: true, message: response };
      this.props.onLoginDataHandler(data);
    } else {
      const data = { status: false, message: response };
      this.props.onLoginDataHandler(data);
    }
  };
  render() {
    return (
      <div class="card">
        <div class="card-body mt-3 mb-3">
          <h4 class="card-title">Register to Binar Cars Rental</h4>
          <p class="card-text">We just accept registration from google Oauth</p>
          <GoogleLogin
            clientId={this.state.clientId}
            buttonText="Login with google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

export default Login;
