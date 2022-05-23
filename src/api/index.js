const axios = require("axios");
// import api from "../config/api.json";

const getCards = () => {
  axios
    .get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

getCards();

// export default getCards;
