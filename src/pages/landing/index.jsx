import React, { Component } from "react";
import Cards from "./components/cards";
import Banner from "./components/bannerCTA";
import Accordion from "./components/accordion";
import Carousel from "./components/carousel";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container mt-5" id="Services">
          <div className="main-services">
            <div className="row align-items-center justify-content-center our-services">
              <div className="col-lg-5 col-md-6 our-services-img">
                <img
                  src="./images/img-service.png"
                  className="img-fluid"
                  alt="services"
                />
              </div>
              <div className="col-lg-4 offset-lg-1 col-md-6 our-services-list">
                <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul className="ul-main">
                  <li>
                    <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                  </li>
                  <li>
                    <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                  </li>
                  <li>
                    <p>Sewa Mobil Jangka Panjang Bulanan</p>
                  </li>
                  <li>
                    <p>Gratis Antar - Jemput Mobil di Bandara</p>
                  </li>
                  <li>
                    <p>Layanan Airport Transfer / Drop In Out</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Cards></Cards>
        <Banner></Banner>
        <Carousel></Carousel>
        <Accordion></Accordion>
      </div>
    );
  }
}

export default Landing;
