import React, { Component } from "react";
import { Link } from "react-router-dom";

class Btn extends Component {
  state = {
    id: this.props.id,
    href: this.props.href,
    name: this.props.name,
  };
  render() {
    return (
      <>
        <Link to={`${this.state.href}`}>
          <button type="button" className="button-global" id={this.state.id}>
            {this.state.name}
          </button>
        </Link>
      </>
    );
  }
}

export default Btn;
