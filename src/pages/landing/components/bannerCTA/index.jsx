import React, { Component } from "react";
import Btn from "../../../../components/btn";

class BannerCTA extends Component {
  state = {
    title: this.props.banner.title,
    description: this.props.banner.description,
    btn: this.props.banner.btn,
  };
  render() {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="main-banner"></div>
            <div className="col-lg-12 btn-primary text-center p-5">
              <h2>{this.state.title}</h2>
              <p>{this.state.description}</p>
              <div className="main-banner-button">
                <Btn id="tombol" href="/cards" name={this.state.btn}></Btn>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BannerCTA;
