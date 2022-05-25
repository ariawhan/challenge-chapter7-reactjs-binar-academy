import React, { Component } from "react";
import footer from "../../data/footer.json";
import navbar from "../../data/navbar.json";
import "./style.css";

class Footer extends Component {
  state = {
    contact: footer.contact,
    social: footer.social,
    copyright: footer.copyright,
    navigation: navbar.navigation,
  };

  contact = (contact) => {
    return (
      <React.Fragment>
        <p>{contact.address}</p>
        <p>{contact.email}</p>
        <p>{contact.number}</p>
      </React.Fragment>
    );
  };

  navigation = (navigation) => {
    return (
      <React.Fragment>
        <div className="footer-nav">
          {navigation.map((nav) => {
            return (
              <a href={nav.href}>
                <p>{nav.name}</p>
              </a>
            );
          })}
        </div>
      </React.Fragment>
    );
  };

  socialMedia = (social) => {
    return (
      <React.Fragment>
        <p className="title-icons">{social.title}</p>
        <div className="connect-icons">
          <div className="row">
            {social.media.map((media) => {
              return (
                <div className="col-2">
                  <a href={media.href}>
                    <img
                      className="img-fluid"
                      src={media.imgSrc}
                      alt={media.imgalt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };

  copyright = (copyright) => {
    return (
      <React.Fragment>
        <p className="copyright-title">{copyright.title}</p>
        <a className="copyright-logo" href={copyright.url}>
          {copyright.name}
        </a>
      </React.Fragment>
    );
  };

  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3 ">
                {this.contact(this.state.contact)}
              </div>
              <div className=" col-md-3">
                {this.navigation(this.state.navigation)}
              </div>
              <div className=" col-md-4 ">
                {this.socialMedia(this.state.social)}
              </div>
              <div className=" col-md-3 ">
                {this.copyright(this.state.copyright)}
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
