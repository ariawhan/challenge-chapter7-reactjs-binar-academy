import React, { Component } from "react";
import Btn from "../btn/";
import banner from "../../data/banner.json";
import styled from "styled-components";
import "./style.css";

const Section = styled.section`
  background-color: #f1f3ff;
  padding-top: 24px;
  position: relative;
`;

class Banner extends Component {
  state = {
    title: banner.main.title,
    description: banner.main.description,
    btn: banner.main.btn,
    img: banner.main.img,
  };

  render() {
    const isBtn = this.props.btn;
    return (
      <Section>
        <div className="container mt-2">
          <div className="row align-items-center intro">
            <div className="col-md-6 intro-text">
              <h1 className="title">{this.state.title}</h1>
              <p className="description"> {this.state.description}</p>
              {isBtn ? (
                <Btn id="tombol" href="/cards" name={this.state.btn}></Btn>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-6 intro-img">
              <img
                className="img-fluid"
                src={this.state.img}
                alt={this.state.img}
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Banner;
