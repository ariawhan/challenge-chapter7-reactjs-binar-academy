import React, { Component } from "react";
import "./style.css";

import styled from "styled-components";

const Section = styled.section`
  align-items: center;
  background-color: #0d28a6;
  display: flex;
  flex-direction: column;
  font-family: "Sigmar One", cursive;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  min-height: 100vh;
  width: 100vw;
`;

class ErrServer extends Component {
  state = { code: this.props.code, msg: this.props.message };
  render() {
    return (
      <Section>
        <div class="mr">
          <h1>{this.state.code}</h1>
          <div class="mr__head"></div>
          <div class="mr__hat hat">
            <div class="hat__bowl"></div>
            <div class="hat__brim"></div>
          </div>
          <div class="mr__ear mr__ear--left ear">
            <div class="ear__inner"></div>
          </div>
          <div class="mr__ear mr__ear--right ear">
            <div class="ear__inner"></div>
          </div>
          <div class="mr__shoe mr__shoe--left shoe">
            <div class="shoe__body"></div>
            <div class="shoe__sole"></div>
          </div>
          <div class="mr__shoe mr__shoe--right shoe">
            <div class="shoe__body"></div>
            <div class="shoe__sole"></div>
          </div>
          <div class="mr__nose"></div>
          <div class="mr__mouth"></div>
          <div class="mr__eye mr__eye--left eye">
            <div class="eye__pupil"></div>
            <div class="eye__lid eye__lid--upper"></div>
            <div class="eye__lid eye__lid--lower"></div>
          </div>
          <div class="mr__eye mr__eye--right eye">
            <div class="eye__pupil"></div>
            <div class="eye__lid eye__lid--upper"></div>
            <div class="eye__lid eye__lid--lower"></div>
          </div>
          <div class="mr__eye-brow mr__eye-brow--left"></div>
          <div class="mr__eye-brow mr__eye-brow--right"></div>
          <div class="mr__arm mr__arm--left arm">
            <div class="hand">
              <div class="finger"></div>
              <div class="finger"></div>
              <div class="finger"></div>
              <div class="finger"></div>
            </div>
          </div>
          <div class="mr__arm mr__arm--right arm">
            <div class="fist"></div>
          </div>
        </div>
        <h1 class="message">{this.state.msg}</h1>
      </Section>
    );
  }
}

export default ErrServer;
