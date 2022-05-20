import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
// import Cards from "../pages/cards";

class Public extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" exact element={<Landing />} />
        {/* <Route path="/cards" element={<Cards />} /> */}
      </Routes>
    );
  }
}
export default Public;
