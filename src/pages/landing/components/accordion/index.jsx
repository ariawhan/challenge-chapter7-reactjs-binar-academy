import React, { Component } from "react";
import "./style.css";

class Accordion extends Component {
  state = {
    title: this.props.accordion.title,
    description: this.props.accordion.description,
    listAccordion: this.props.accordion.listAccordion,
  };

  accordion = (list) => {
    return (
      <React.Fragment>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {list.map((list) => {
            return (
              <div className="accordion-item mb-3 border">
                <h2
                  className="accordion-header"
                  id={"panelsStayOpen-heading" + list.id}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#panelsStayOpen-collapseOne" + list.id}
                    aria-expanded="false"
                    aria-controls={"panelsStayOpen-collapseOne" + list.id}
                  >
                    {list.title}
                  </button>
                </h2>
                <div
                  id={"panelsStayOpen-collapseOne" + list.id}
                  className="accordion-collapse collapse"
                  aria-labelledby={"panelsStayOpen-heading" + list.id}
                >
                  <div className="accordion-body">
                    <p className="paragraf">{list.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return (
      <>
        <div className="container mt-5" id="faq">
          <div className="accordion-landing">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <h4>{this.state.title}</h4>
                <p>{this.state.description}</p>
              </div>
              <div className="col-lg-7 col-md-12">
                {this.accordion(this.state.listAccordion)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Accordion;
