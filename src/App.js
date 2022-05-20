import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Banner from "./components/banner";

//routes
import Public from "./routes/public";

class App extends Component {
  // state = { }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Public />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
