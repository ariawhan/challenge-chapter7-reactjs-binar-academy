import React, { Component } from "react";
import Btn from "../btn/";
import banner from "../../data/banner.json";

class Banner extends Component {
  state = {
    title: banner.main.title,
    description: banner.main.description,
    btn: banner.main.btn,
    img: banner.main.img,
  };
  render() {
    return (
      <>
        <div className="container mt-2">
          <div className="header-banner">
            <div className="row align-items-center intro">
              <div className="col-md-6 intro-text">
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <Btn id="tombol" onClick="search()" name={this.state.btn}></Btn>
              </div>
              <div className="col-md-6 intro-img">
                <img className="img-fluid" src={this.state.img} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
