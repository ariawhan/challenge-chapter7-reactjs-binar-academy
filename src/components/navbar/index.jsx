import React, { Component } from "react";

class NavBar extends Component {
  state = {
    navBar: [
      {
        name: "Our Services",
        href: "/#Services",
      },
      {
        name: "Why Us",
        href: "/#whyus",
      },
      {
        name: "Testimonial",
        href: "/#Testimonial",
      },
      {
        name: "FAQ",
        href: "/#faq",
      },
    ],
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="header-navbar-logo" href="/"></a>
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
            <ul className="navbar-nav mr-auto">
              {this.state.navBar.map((navBar) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href={navBar.href}>
                      {navBar.name}
                    </a>
                  </li>
                );
              })}
              <li className="nav-item">
                <button
                  type="button"
                  className="button-global"
                  data-bs-toggle="modal"
                  data-bs-target="#modalregister"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
