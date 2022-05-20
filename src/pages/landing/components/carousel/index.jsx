import React, { Component } from "react";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div class="main-testimoni" id="Testimonial">
        <div class="container mt-5">
          <div class="row">
            <div class="col-12">
              <h4>Testimonial</h4>
              <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
          </div>
        </div>
        <section class="container-fluid">
          <div class="main-testimoni-carousel">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="main-testimoni-deks">
                  <div class="row">
                    <div class="col-2 offset-3">
                      <img
                        class="img-fluid"
                        src="./images/icons/icon-rate.png"
                        alt="icon rate"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-2">
                      <div class="main-testimoni-images">
                        <img src="./images/img-photo-1.png" alt="Photo Men" />
                      </div>
                    </div>
                    <div class="col-9 offset-1">
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="main-testimoni-name">
                      <div class="col- offset-3">
                        <p>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-testimoni-deks">
                  <div class="row">
                    <div class="col-2 offset-3">
                      <img
                        class="img-fluid"
                        src="./images/icons/icon-rate.png"
                        alt="icon rate"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-2">
                      <div class="main-testimoni-images">
                        <img src="./images/img-photo-2.png" alt="Photo Grils" />
                      </div>
                    </div>
                    <div class="col-9 offset-1">
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="main-testimoni-name">
                      <div class="col- offset-3">
                        <p>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="main-testimoni-deks">
                  <div class="row">
                    <div class="col-2 offset-3">
                      <img
                        class="img-fluid"
                        src="./images/icons/icon-rate.png"
                        alt="icon rate"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-2">
                      <div class="main-testimoni-images">
                        <img src="./images/img-photo-2.png" alt="Photo Gril" />
                      </div>
                    </div>
                    <div class="col-9 offset-1">
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="main-testimoni-name">
                      <div class="col- offset-3">
                        <p>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Carousel;
