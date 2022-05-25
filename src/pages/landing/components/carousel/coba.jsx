import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Coba extends Component {
  state = {};
  render() {
    return (
      <OwlCarousel
        navText={[
          "<img src='./images/icons/Left-button.png' width='32px' height='32px'>",
          "<img src='./images/icons/Right-button.png' width='32px' height='32px'>",
        ]}
        className="owl-theme"
        loop={true}
        center={true}
        dots={false}
        margin={50}
        nav={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        }}
      >
        <div className="item p-4 ">
          <div className="row justify-content-center align-items-center ">
            <div className="col-3">
              <img
                src="./assets/img_photo1.png"
                alt=""
                style={{ width: "80px" }}
                className="mx-auto"
              />
            </div>
            <div className="col-9">
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <div className="comment">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, aliquid obcaecati quibusdam repellendus suscipit
                doloremque beatae iure odit. Totam libero odit facilis iste
                consectetur numquam!"
              </div>
              <div
                className="profile mt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Ash 20, Singapore
              </div>
            </div>
          </div>
        </div>
        <div className="item p-4 ">
          <div className="row justify-content-center align-items-center ">
            <div className="col-3">
              <img
                src="./assets/img_photo1.png"
                alt=""
                style={{ width: "80px" }}
                className="mx-auto"
              />
            </div>
            <div className="col-9">
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <div className="comment">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, aliquid obcaecati quibusdam repellendus suscipit
                doloremque beatae iure odit. Totam libero odit facilis iste
                consectetur numquam!"
              </div>
              <div
                className="profile mt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Ash 20, Singapore
              </div>
            </div>
          </div>
        </div>
        <div className="item p-4 ">
          <div className="row justify-content-center align-items-center ">
            <div className="col-3">
              <img
                src="./assets/img_photo1.png"
                alt=""
                style={{ width: "80px" }}
                className="mx-auto"
              />
            </div>
            <div className="col-9">
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <i
                className="bi bi-star-fill"
                style={{
                  color: "#f9cc00",
                }}
              ></i>
              <div className="comment">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, aliquid obcaecati quibusdam repellendus suscipit
                doloremque beatae iure odit. Totam libero odit facilis iste
                consectetur numquam!"
              </div>
              <div
                className="profile mt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Ash 20, Singapore
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Coba;
