import React, { Component } from "react";
import Cards from "./components/cards";
// import Banner from "./components/bannerCTA";
import Accordion from "./components/accordion";
import Carousel from "./components/carousel";
import Banner from "../../components/banner";

//Data
import landing from "../../data/landing.json";
import banner from "../../data/banner";

//style
import "./style.css";

class Landing extends Component {
  state = {
    main: landing.main,
    cards: landing.cards,
    banner: banner.CTA,
    carousel: landing.carousel,
    accordion: landing.accordion,
  };

  listService = (list) => {
    return (
      <React.Fragment>
        <ul className="ul-main">
          {list.map((list) => {
            return (
              <li>
                <p>{list}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        <Banner btn="true" />
        <div className="container mt-5" id="Services">
          <div className="main-services">
            <div className="row align-items-center justify-content-center our-services">
              <div className="col-lg-5 col-md-6 our-services-img">
                <img
                  src={this.state.main.imgSrc}
                  className="img-fluid"
                  alt={this.state.main.imgAlt}
                />
              </div>
              <div className="col-lg-4 offset-lg-1 col-md-6 our-services-list">
                <h4>{this.state.main.title}</h4>
                <p className="description">{this.state.main.description}</p>
                {this.listService(this.state.main.list)}
              </div>
            </div>
          </div>
        </div>
        <Cards cards={this.state.cards}></Cards>
        {/* <Banner banner={this.state.banner}></Banner> */}
        <Carousel carousel={this.state.carousel}></Carousel>
        <Accordion accordion={this.state.accordion}></Accordion>
      </>
    );
  }
}

export default Landing;
