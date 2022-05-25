import React, { Component } from "react";

class Cards extends Component {
  state = {
    title: this.props.cards.title,
    description: this.props.cards.description,
    listCards: this.props.cards.listCards,
  };

  listCards = (list) => {
    return (
      <React.Fragment>
        {list.map((list) => {
          return (
            <>
              <div class="col-md-6 col-lg-3 mt-3">
                <div class="card h-100">
                  <div class="main-whyus-items">
                    <div class="card-body">
                      <img
                        className="mb-3 mt-2"
                        src={list.imgSrc}
                        width="32px"
                        height="32px"
                        alt={list.imgAlt}
                      />
                      <h5 class="card-title ">{list.title}</h5>
                      <p class="card-text">{list.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </React.Fragment>
    );
  };
  render() {
    return (
      <>
        <div class="container mt-5" id="whyus">
          <div class="row">
            <div class="main-whyus">
              <div class="col-12">
                <div class="main-whyus-title">
                  <h4>{this.state.title}</h4>
                  <p>{this.state.description}</p>
                </div>
              </div>
              <div class="row">{this.listCards(this.state.listCards)}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
