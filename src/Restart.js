import React, { Component } from "react";
import Reload from "./restart.svg";

class Restart extends Component {
  render() {
    return (
      <div
        className={
          this.props.end && !this.props.loading
            ? "fadeIn scaleBackground"
            : " invisible noPointer scaleBackground"
        }
        style={{ zIndex: 4, cursor: "pointer" }}
        onClick={this.props.onClick}
      >
        <img
          src={Reload}
          alt="Restart from beginning."
          className={"reloadIcon"}
        />
      </div>
    );
  }
}

export default Restart;
