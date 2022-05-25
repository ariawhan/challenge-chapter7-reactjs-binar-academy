import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

class Carousel extends Component {
  state = {
    title: this.props.carousel.title,
    description: this.props.carousel.description,
    listCarousel: this.props.carousel.listCarousel,
  };

  carousel = (list) => {
    return (
      <OwlCarousel
        navText={[
          "<img src='./images/icons/Left-button.png' width='32px' height='32px'>",
          "<img src='./images/icons/Right-button.png' width='32px' height='32px'>",
        ]}
        className="owl-theme"
        loop={true}
        center={true}
        dots={false}
        margin={100}
        nav={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        }}
      >
        {list.map((list) => {
          return (
            <>
              <div className="item p-4">
                <div className="item-content">
                  <div className="row justify-content-center align-items-center ">
                    <div className="col-sm-3 col-lg-3">
                      <img
                        // class="img-fluid"
                        src={list.imgPeopleSrc}
                        alt={list.imgStarAlt}
                        style={{ width: "80px" }}
                        className="mx-auto"
                      />
                    </div>
                    <div className="col-9">
                      <div className="star-content">
                        <div class="row">
                          <div class="col-lg-2 col-5">
                            <img
                              class="img-fluid"
                              src={list.imgStarSrc}
                              alt={list.imgStarAlt}
                            />
                          </div>
                        </div>
                      </div>

                      <p>{list.description}</p>
                      <p className="desc">{list.name + ", " + list.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </OwlCarousel>
    );
  };
  render() {
    return (
      <>
        <div class="main-testimoni" id="Testimonial">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12">
                <h4>{this.state.title}</h4>
                <p>{this.state.description}</p>
              </div>
            </div>
          </div>
          <section class="container-fluid">
            {this.carousel(this.state.listCarousel)}
          </section>
        </div>
      </>
    );
  }
}

export default Carousel;
