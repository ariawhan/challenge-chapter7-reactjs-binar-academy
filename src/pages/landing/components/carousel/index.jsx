import React, { Component } from "react";

class Carousel extends Component {
  state = {
    title: this.props.carousel.title,
    description: this.props.carousel.description,
    listCarousel: this.props.carousel.listCarousel,
  };

  carousel = (list) => {
    return (
      <React.Fragment>
        <div class="main-testimoni-carousel">
          <div class="owl-carousel owl-theme">
            {list.map((list) => {
              return (
                <div class="item">
                  <div class="main-testimoni-deks">
                    <div class="row">
                      <div class="col-2 offset-3">
                        <img
                          class="img-fluid"
                          src={list.imgStarSrc}
                          alt={list.imgStarAlt}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <div class="main-testimoni-images">
                          <img
                            src={list.imgPeopleSrc}
                            alt={list.imgPeopleAlt}
                          />
                        </div>
                      </div>
                      <div class="col-9 offset-1">
                        <p>{list.description}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="main-testimoni-name">
                        <div class="col- offset-3">
                          <p>{list.name + ", " + list.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return (
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
    );
  }
}

export default Carousel;
