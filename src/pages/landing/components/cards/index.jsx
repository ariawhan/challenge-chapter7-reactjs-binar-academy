import React, { Component } from "react";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div class="container mt-5" id="whyus">
        <div class="row main-whyus">
          <div class="col-12">
            <div class="main-whyus-title">
              <h4>Why Us?</h4>
              <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
          <div class="col-12 main-whyus-cards">
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-3 main-whyus-items">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-1">
                        <img
                          src="./images/icons/icon-complete.png"
                          width="32px"
                          height="32px"
                          alt="Complete"
                        />
                      </div>
                      <div class="col-12">
                        <h5 class="card-title">Mobil Lengkap</h5>
                        <p class="card-text">
                          Tersedia banyak pilihan mobil, kondisi masih baru,
                          bersih dan terawat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 main-whyus-items">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-1">
                        <img
                          src="./images/icons/icon-price.png"
                          width="32px"
                          height="32px"
                          alt="icon price"
                        />
                      </div>
                      <div class="col-12">
                        <h5 class="card-title">Harga Murah</h5>
                        <p class="card-text">
                          Harga murah dan bersaing, bisa bandingkan harga kami
                          dengan rental mobil lain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 main-whyus-items">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-1">
                        <img
                          src="./images/icons/icon-24hrs.png"
                          width="32px"
                          height="32px"
                          alt="icon 24hrs"
                        />
                      </div>
                      <div class="col-12">
                        <h5 class="card-title">Layanan 24 Jam</h5>
                        <p class="card-text">
                          Siap melayani kebutuhan Anda selama 24 jam nonstop.
                          Kami juga tersedia di akhir minggu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 main-whyus-items">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-1">
                        <img
                          src="./images/icons/icon-professional.png"
                          width="32px"
                          height="32px"
                          alt="icon professional"
                        />
                      </div>
                      <div class="col-12">
                        <h5 class="card-title">Sopir Profesional</h5>
                        <p class="card-text">
                          Sopir yang profesional, berpengalaman, jujur, ramah
                          dan selalu tepat waktu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
