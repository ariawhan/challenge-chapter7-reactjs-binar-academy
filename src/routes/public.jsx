import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import Cards from "../pages/cards";
import Registration from "../pages/registration";

class Public extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    );
  }
}
export default Public;
