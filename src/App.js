import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrServer from "./components/warning";

// components
import NavBar from "./components/navbar";
import Footer from "./components/footer";

//routes
import Public from "./routes/public";

class App extends Component {
  state = { googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID };
  render() {
    if (
      this.state.googleClientId === null ||
      this.state.googleClientId === "" ||
      this.state.googleClientId === undefined
    ) {
      return (
        <ErrServer
          code="500"
          message="Before use this application, Please use environment variables to run this application and restart application. If you have trouble please contact dev!"
        ></ErrServer>
      );
    } else {
      let path = window.location.pathname.toString();
      if (path === "/" || path === "/cards" || path === "/registration") {
        return (
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <main>
              <Public />
            </main>
            <Footer />
          </BrowserRouter>
        );
      } else {
        return <ErrServer code="400" message="Page Not Found!"></ErrServer>;
      }
    }
  }
}

export default App;
