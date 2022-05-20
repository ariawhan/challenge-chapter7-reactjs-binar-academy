import React, { Component } from "react";

class Btn extends Component {
  state = {
    id: this.props.id,
    onClick: this.props.onClick,
    name: this.props.name,
  };
  render() {
    return (
      <>
        <button
          type="button"
          className="button-global"
          id={this.state.id}
          onClick={this.state.onClick}
        >
          {this.state.name}
        </button>
      </>
    );
  }
}

export default Btn;
