import React, { Component } from "react";
import navbar from "../../data/navbar.json";
import Btn from "../btn";
import "./style.css";

class NavBar extends Component {
  state = {
    navigation: navbar.navigation,
    registrasi: navbar.registrasi,
  };

  navigation = (navBar, registrasi) => {
    return (
      <React.Fragment>
        <ul className="navbar-nav mr-auto">
          {navBar.map((nav) => {
            return (
              <li className="nav-item">
                <a className="nav-link" href={nav.href}>
                  {nav.name}
                </a>
              </li>
            );
          })}
          <li className="nav-item">
            <Btn id="tombol" href="/registration" name={registrasi.btn}></Btn>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="logo" href="/">
              ARIAWAN
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end bg-light"
              id="navbarNav"
            >
              {this.navigation(this.state.navigation, this.state.registrasi)}
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;
