import axios from "axios";
import config from "../../config/api.json";

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCars = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_CARS,
      payload: { loading: true, data: false, errorMessage: false },
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
