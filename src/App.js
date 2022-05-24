import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrServer from "./components/warning";

// components
import NavBar from "./components/navbar";
import Footer from "./components/footer";

//routes
import Public from "./routes/public";

// //css
// import "./App.css";

class App extends Component {
  state = {googleClientId : process.env.REACT_APP_GOOGLE_CLIENT_ID}
  render() {
    if (this.state.googleClientId === null || this.state.googleClientId === "" || this.state.googleClientId === undefined) {
      return  <ErrServer code="500" message="Before use this application, Please use environment variables to run this application and restart application. If you have trouble please contact dev!"></ErrServer>
    }
    else {
      return (
        <BrowserRouter>
        {console.log(this.state.googleClientId)}
          <header>
            <NavBar />
          </header>
          <main>
            <Public />
          </main>
          <Footer />
        </BrowserRouter>
      );
    }
  }
}

export default App;
