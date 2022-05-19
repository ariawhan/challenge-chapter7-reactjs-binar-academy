import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-2 col-md-3 p-4">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="ol-lg-2 col-md-3 p-4">
              <div className="footer-nav">
                <a href="#Services">
                  <p>Our services</p>
                </a>
                <a href="#whyus">
                  <p>Why Us</p>
                </a>
                <a href="#Testimonial">
                  <p>Testimonial</p>
                </a>
                <a href="#faq">
                  <p>FAQ</p>
                </a>
              </div>
            </div>
            <div className="ol-lg-2 col-md-3 p-4">
              <p>Connect with us</p>
              <div className="footer-connect-icons">
                <div className="row">
                  <div className="col-2">
                    <a href="https://www.facebook.com/ariawhan">
                      <img
                        href="instagram.com/gdariawhan"
                        className="img-fluid"
                        src="./images/icons/icon-facebook.png"
                        alt="facebook"
                      />
                    </a>
                  </div>
                  <div className="col-2">
                    <a href="https://www.instagram.com/gdariawhan">
                      <img
                        className="img-fluid"
                        src="./images/icons/icon-instagram.png"
                        alt="instagram"
                      />
                    </a>
                  </div>
                  <div class="col-2">
                    <a href="https://twitter.com/gdariawhan">
                      <img
                        class="img-fluid"
                        src="./images/icons/icon-twitter.png"
                        alt="twitter"
                      />
                    </a>
                  </div>
                  <div className="col-2">
                    <a href="https://gmail.com">
                      <img
                        className="img-fluid"
                        src="./images/icons/icon-mail.png"
                        alt="mail.png"
                      />
                    </a>
                  </div>
                  <div className="col-2">
                    <a href="https://www.twitch.tv/gdariawhan">
                      <img
                        className="img-fluid"
                        src="./images/icons/icon-twitch.png"
                        alt="twitch"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ol-lg-2 col-md-3 p-4">
              <p>Copyright Binar 2022</p>
              <a className="footer-logo" href="index.html"></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
