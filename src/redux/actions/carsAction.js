import axios from "axios";
import config from "../../config/api.json";

export const GET_LIST_CARS = "GET_LIST_CARS";

// const filterCars = (cars, filter) => {
//   let inputDataTime = filter.date + "T" + filter.time + "Z";
//   const filterType = cars.filter((car) => {
//     return car.transmission.toLowerCase() === filter.type.toLowerCase();
//   });
//   // console.log(filterType);
//   const filterData = filterType.filter((car) => {
//     console.log(filter.passenger);
//     if (filter.passenger.length !== 0) {
//       return (
//         car.available === true &&
//         car.capacity >= filter.passenger &&
//         Date.parse(car.availableAt) <= Date.parse(inputDataTime)
//       );
//     } else {
//       return (
//         car.available === true &&
//         Date.parse(car.availableAt) <= Date.parse(inputDataTime)
//       );
//     }
//   });
//   return { type: true, data: filterData };
// };

export const getListCars = (filter) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_CARS,
      payload: { loading: true, data: false, errorMessage: "false" },
    });
    //get API
    axios({
      method: config.getCards.method,
      url: config.getCards.host + config.getCards.endPoint,
      timeout: 120000,
    })
      .then(function (response) {
        // handle success
        // console.log("berhasil", response.data);
        // const filterData = filterCars(response.data, filter);
        // if (filterData.type) {
        //   dispatch({
        //     type: GET_LIST_CARS,
        //     payload: {
        //       loading: false,
        //       data: filterData.data,
        //       errorMessage: false,
        //     },
        //   });
        // } else {
        //   dispatch({
        //     type: GET_LIST_CARS,
        //     payload: {
        //       loading: false,
        //       data: false,
        //       errorMessage: filterData.err,
        //     },
        //   });
        // }
        dispatch({
          type: GET_LIST_CARS,
          payload: { loading: false, data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
        dispatch({
          type: GET_LIST_CARS,
          payload: { loading: false, data: false, errorMessage: error.message },
        });
      });
  };
};
