import React, { Component, useRef } from "react";
import Btn from "../../../../components/btn";
import "./style.css";
import Cards from "../cards";

class Search extends Component {
  state = {
    type: this.props.search.type,
    date: this.props.search.date,
    time: this.props.search.time,
    passenger: this.props.search.passenger,
    btn: this.props.search.btn,
    data: this.props.data,
    inputPassenger: "",
    inputTime: "",
    inputDate: "",
  };

  handleClick = () => {
    if (this.state.inputTime == "" || this.state.inputDate == "") {
      // alert("Silakan lengkapi form!");
    }
    let inputDateTime = this.state.inputDate + "T" + this.state.inputTime + "Z";
  };

  handleChangePassenger = (value) => {
    return this.setState({
      input: value.target.value,
    });
  };

  handleChangeTime = (value) => {
    return this.setState({
      inputTime: value.target.value,
    });
  };

  handleChangeDate = (value) => {
    return this.setState({
      inputDate: value.target.value,
    });
  };

  render() {
    // console.log(this.state.data);
    return (
      <>
        {console.log(this.state.inputTime)}
        <div
          id="search"
          class="container border bg-primary rounded p-3 mt-2 col-9"
        >
          <div
            class="row gx-3 gy-2 mx-3 align-items-center"
            onClick="activeDarkBackground()"
          >
            <div class="col-sm-2 m-2">
              <label for="specificSizeSelect">{this.state.type.title}</label>
              <select class="form-select mt-2" id="specificSizeSelect">
                <option selected>{this.state.type.selected}</option>
                {this.state.type.options.map((option) => {
                  return <option value={option.value}>{option.name}</option>;
                })}
              </select>
            </div>
            <div class="col-sm-2 m-2">
              <label for="specificSizeSelect ">{this.state.date.title}</label>
              <input
                type="date"
                min="2022-05-23"
                onChange={this.handleChangeDate}
                class="form-control mt-2"
                id="inputTanggal"
              />
            </div>
            <div class="col-sm-2 m-2">
              <label for="specificSizeSelect">{this.state.time.title}</label>
              <input
                type="time"
                onChange={this.handleChangeTime}
                class="form-control  mt-2"
                id="inputWaktu"
              />
            </div>
            <div class="col-sm-3 m-2">
              <label for="specificSizeInputGroupUsername">
                {this.state.passenger.title}
              </label>
              <div class="input-group mt-2">
                <input
                  onChange={this.handleChangePassenger}
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
            <div class="col-sm-2 text-center">
              <div className="mt-4">
                <button
                  id="load-btn"
                  onclick={this.handleClick()}
                  class="button-global"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5 col-md-9">
          <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3">
            {console.log(this.state.data)}
            {this.state.data.map((car) => {
              return (
                <>
                  <Cards
                    imgSrc={car.image}
                    type={car.type}
                    manufacture={car.manufacture}
                    rentPerDay={car.rentPerDay}
                    description={car.description}
                    capacity={car.capacity}
                    transmission={car.transmission}
                    year={car.year}
                    btn="Pilih Mobil"
                  ></Cards>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
