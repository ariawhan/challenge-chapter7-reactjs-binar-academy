import React, { Component } from "react";
import navbar from "../../data/navbar.json";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
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
            <div className="btn-nav">
              <Btn id="tombol" href="/registration" name={registrasi.btn}></Btn>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        <Navbar key={"md"} expand={"md"}>
          <Container>
            <a className="logo" href="/">
              ARIAWAN
            </a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="open-nav">
                <a className="logo" href="/">
                  ARIAWAN
                </a>
              </Offcanvas.Header>
              <Offcanvas.Body className="open-navbar">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {this.navigation(
                    this.state.navigation,
                    this.state.registrasi
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
