import React, { Component } from "react";
import Banner from "../../components/banner";

class Cards extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner btn={false} />
        <div
          id="search"
          class="container border bg-primary rounded p-3 mt-2 col-9"
        >
          <div
            class="row gx-3 gy-2 mx-3 align-items-center"
            onClick="activeDarkBackground()"
          >
            <div class="col-sm-2 m-3">
              <label for="specificSizeSelect">Tipe Driver</label>
              <select class="form-select" id="specificSizeSelect">
                <option selected>Pilih Tipe Driver</option>
                <option value="1">Dengan Supir</option>
                <option value="2">Tanpa Supir (Lepas Kunci)</option>
              </select>
            </div>
            <div class="col-sm-2 m-2">
              <label for="specificSizeSelect">Tanggal</label>
              <input type="date" class="form-control" id="inputTanggal" />
            </div>
            <div class="col-sm-2 m-2">
              <label for="specificSizeSelect">Waktu Jemput/Ambil</label>
              <input type="time" class="form-control" id="inputWaktu" />
            </div>
            <div class="col-sm-3 m-2">
              <label for="specificSizeInputGroupUsername">
                Jumlah Penumpang (Optional)
              </label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputPenumpang"
                  placeholder="Jumlah Penumpang"
                />
                <div class="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-people"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div>
                <button
                  id="load-btn"
                  onclick="runSearch()"
                  class="button-global"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="clear-btn"></div>
        <div class="container mt-5 col-md-9">
          <div
            id="cars-container"
            class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3"
          ></div>
        </div>
      </>
    );
  }
}

export default Cards;
