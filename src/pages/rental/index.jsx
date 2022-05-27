import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Search from "./components/search";
import Cards from "./components/cards";
import dataCars from "../../data/cards.json";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getListCars } from "../../redux/actions/carsAction";

function Rental() {
  //state
  const [isWarning, setIsWarning] = useState(false);
  const [msgWarning, setMsgWarning] = useState("");
  const [typeWarning, setTypeWarning] = useState("");
  const [listCars, setlistCars] = useState([]);

  //get from reducers
  const { getListCarsResult, getListCarsLoading, getListCarsError } =
    useSelector((state) => state.CarsReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    //memanggil actions getListCars
    dispatch(getListCars());
  }, [dispatch]);

  // const saveSearchDataHandler = (dataSearch) => {
  //   if (
  //     dataSearch.date.length === 0 ||
  //     dataSearch.time.length === 0 ||
  //     dataSearch.type.length === 0
  //   ) {
  //     setIsWarning(true);
  //     setMsgWarning(
  //       "Silakan lengkapi form type driver, tanggal beserta waktu !"
  //     );
  //     setTypeWarning("alert-warning");
  //     setlistCars([]);
  //   } else {
  //     setIsWarning(false);
  //     setMsgWarning("");
  //     setTypeWarning("");
  //     dispatch(getListCars(dataSearch));
  //     if (getListCarsResult) {
  //       setIsWarning(false);
  //       setMsgWarning("");
  //       setTypeWarning("");
  //       if (getListCarsResult.length === 0) {
  //         setIsWarning(true);
  //         setMsgWarning(
  //           "Mohon maaf kendaraan belum tersedia di hari tersebut !"
  //         );
  //         setTypeWarning("alert-primary");
  //         setlistCars([]);
  //       } else {
  //         return setlistCars(getListCarsResult);
  //       }
  //     }
  //   }
  // };

  const filterCars = (listForFilter, Search) => {
    let inputDateTime = Search.date + "T" + Search.time + "Z";
    const filterType = listForFilter.filter((car) => {
      return car.transmission.toLowerCase() === Search.type.toLowerCase();
    });
    const filteredCars = filterType.filter((car) => {
      if (Search.passenger.length !== 0) {
        return (
          car.available === true &&
          car.capacity >= Search.passenger &&
          Date.parse(car.availableAt) <= Date.parse(inputDateTime)
        );
      } else {
        return (
          car.available === true &&
          Date.parse(car.availableAt) <= Date.parse(inputDateTime)
        );
      }
    });
    return filteredCars;
  };

  const saveSearchDataHandler = (dataSearch) => {
    console.log(dataSearch);
    if (
      dataSearch.date.length === 0 ||
      dataSearch.time.length === 0 ||
      dataSearch.type.length === 0
    ) {
      setIsWarning(true);
      setMsgWarning("Silakan lengkapi form type driver, tanggal dan waktu !");
      setTypeWarning("alert-warning");
      setlistCars([]);
    } else {
      setIsWarning(false);
      setMsgWarning("");
      setTypeWarning("");
      if (getListCarsResult) {
        setIsWarning(false);
        setMsgWarning("");
        setTypeWarning("");
        //Prosses Dara Cars
        const listCars = filterCars(getListCarsResult, dataSearch);
        if (listCars.length === 0) {
          setIsWarning(true);
          setMsgWarning(
            "Mohon maaf kendaraan belum tersedia di hari tersebut !"
          );
          setTypeWarning("alert-primary");
          setlistCars([]);
        } else {
          return setlistCars(listCars);
        }
      } else if (getListCarsLoading) {
        setIsWarning(true);
        setMsgWarning("Loading Data Cars . . . . .");
        setTypeWarning("alert-light");
      } else if (getListCarsError) {
        setIsWarning(true);
        setMsgWarning("404 Bad Request  ' " + getListCarsError + " ' ");
        setTypeWarning("alert-danger");
      }
    }
  };

  const renderCars = (cars) => {
    // console.log(cars);
    return (
      <>
        {cars.map((car) => {
          return (
            <Cards
              imgSrc={car.image}
              type={car.type}
              manufacture={car.manufacture}
              rentPerDay={car.rentPerDay}
              description={car.description}
              capacity={car.capacity}
              transmission={car.transmission}
              year={car.year}
              btn="Pilih Mobil"
            ></Cards>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Banner btn={false} />
      <Search
        search={dataCars.search}
        onSaveSearchDataHandler={saveSearchDataHandler}
      ></Search>
      <div class="container mt-5 col-md-9">
        {isWarning ? (
          <div className={"alert " + typeWarning} role="alert">
            <h5 className="text-center">{msgWarning}</h5>
          </div>
        ) : (
          <></>
        )}
        <div class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3">
          {renderCars(listCars)}
        </div>
      </div>
    </>
  );
}

export default Rental;
