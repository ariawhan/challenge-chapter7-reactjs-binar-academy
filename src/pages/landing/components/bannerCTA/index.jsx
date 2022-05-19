import React, { Component } from "react";

class BannerCTA extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="main-banner"></div>
          <div className="col-lg-12 btn-primary text-center p-5">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="main-banner-button">
              <button
                id="tombol2"
                type="button"
                className="button-global"
                onClick="search()"
              >
                Mulai Sewa Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerCTA;
