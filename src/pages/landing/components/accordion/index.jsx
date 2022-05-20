import React, { Component } from "react";

class Accordion extends Component {
  state = {
    title: this.props.accordion.title,
    description: this.props.accordion.description,
    listAccordion: this.props.accordion.listAccordion,
  };

  accordion = (list) => {
    return (
      <React.Fragment>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          {list.map((list) => {
            return (
              <div class="accordion-item mb-3 border">
                <h2
                  class="accordion-header"
                  id={"panelsStayOpen-heading" + list.id}
                >
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  aria-labelledby={"panelsStayOpen-heading" + list.id}
                >
                  <div class="accordion-body">
                    <p class="paragraf">{list.description}</p>
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
        <div class="container mt-5" id="faq">
          <div class="main-faq">
            <div class="row">
              <div class="col-lg-5 col-md-12">
                <h4>{this.state.title}</h4>
                <p>{this.state.description}</p>
              </div>
              <div class="col-lg-7 col-md-12">
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
