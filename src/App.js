import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import NavBar from "./components/navbar";
import Footer from "./components/footer";

//routes
import Public from "./routes/public";

// //css
// import "./App.css";

class App extends Component {
  // state = { }
  render() {
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
  }
}

export default App;
