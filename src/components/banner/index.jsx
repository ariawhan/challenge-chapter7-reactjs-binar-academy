import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-2">
        <div className="header-banner">
          <div className="row align-items-center intro">
            <div className="col-md-6 intro-text">
              <h1>
                Sewa & Rental Mobil Terbaik di <br />
                kawasan (Lokasimu)
              </h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas <br />
                terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu <br />
                untuk sewa mobil selama 24 jam.
              </p>
              <button
                type="button"
                className="button-global"
                id="tombol"
                onClick="search()"
              >
                Mulai Sewa Mobil
              </button>
            </div>
            <div className="col-md-6 intro-img">
              <img className="img-fluid" src="./images/img-car.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
