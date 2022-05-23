import React, { Component } from "react";
import Banner from "../../components/banner";
import Search from "./components/search";
// import Cards from "./components/cards";
import cards from "../../data/cards.json";

import axios from "axios";

class Rental extends Component {
  constructor(props) {
    super(props);
    this.state = { search: cards.search };
  }
  getData = () => {
    const data = [];
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          data.push(response.data[i]);
        }
        // return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return data;
  };

  render() {
    return (
      <>
        {/* {console.log(this.getData())} */}
        <Banner btn={false} />
        <Search search={this.state.search} data={this.getData()}></Search>
        {/* <Cards></Cards> */}
      </>
    );
  }
}

export default Rental;
