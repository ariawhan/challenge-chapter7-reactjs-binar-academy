import React, { useState } from "react";
import "./style.css";

const Search = (props) => {
  //state
  const [inputPassenger, setInputPassenger] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const state = {
    type: props.search.type,
    date: props.search.date,
    time: props.search.time,
    passenger: props.search.passenger,
    btn: props.search.btn,
  };

  const handleChangePassenger = (event) => {
    return setInputPassenger(event.target.value);
  };

  const handleChangeTime = (event) => {
    return setInputDate(event.target.value);
  };

  const handleChangeDate = (event) => {
    return setInputTime(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const data = {
      passenger: inputPassenger,
      date: inputDate,
      time: inputTime,
    };

    // console.log("search", data);

    props.onSaveSearchDataHandler(data);
    // clear entered state
    // setInputPassenger("");
    // setInputDate("");
    // setInputTime("");
  };

  return (
    <>
      <div
        id="search"
        class="container border bg-primary rounded p-3 mt-2 col-9"
      >
        <form onSubmit={handleClick}>
          <div class="row gx-3 gy-2 mx-3 align-items-center justify-content-md-center">
            <div class="col-lg-2 col-md-4 m-2">
              <label for="specificSizeSelect">{state.type.title}</label>
              <select class="form-select mt-2" id="specificSizeSelect">
                <option selected>{state.type.selected}</option>
                {state.type.options.map((option) => {
                  return <option value={option.value}>{option.name}</option>;
                })}
              </select>
            </div>
            <div class="col-lg-2 col-md-4 m-2">
              <label for="specificSizeSelect ">{state.date.title}</label>
              <input
                type="date"
                min="2022-05-23"
                // value={inputDate}
                onChange={handleChangeDate}
                class="form-control mt-2"
                id="inputTanggal"
              />
            </div>
            <div class="col-lg-2 col-md-4 m-2">
              <label for="specificSizeSelect">{state.time.title}</label>
              <input
                type="time"
                // value={inputTime}
                onChange={handleChangeTime}
                class="form-control  mt-2"
                id="inputWaktu"
              />
            </div>
            <div class="col-lg-3 col-md-4 m-2">
              <label for="specificSizeInputGroupUsername">
                {state.passenger.title}
              </label>
              <div class="input-group mt-2">
                <input
                  value={inputPassenger}
                  onChange={handleChangePassenger}
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
            <div class="col-lg-2 col-md-4 text-center">
              <div className="mt-4">
                <button type="submit" class="button">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
