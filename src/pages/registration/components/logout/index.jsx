import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

class Logout extends Component {
  state = {
    clientId: this.props.clientId,
    email: this.props.email,
    name: this.props.name,
    googleId: this.props.googleId,
  };

  onSuccess = () => {
    console.log("Logout Success");
  };

  render() {
    return (
      <div class="card">
        <div class="card-body mt-3 mb-3">
          <h4 class="card-title">Welcome {this.state.name}</h4>
          <p class="card-text">Your Email : {this.state.email}</p>
          <p class="card-text">Your GoogleId : {this.state.googleId}</p>
          <GoogleLogout
            clientId={this.state.clientId}
            buttonText="Logout"
            onLogoutSuccess={this.onSuccess}
          />
        </div>
      </div>
    );
  }
}

export default Logout;
