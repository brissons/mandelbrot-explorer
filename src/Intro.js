import React from "react";
import Click from "./Click.js";
import Placeholder from "./placeHolder.png";
import { CircleSpinner } from "react-spinners-kit";

class IntroOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
    };
  }

  imageLoaded() {
    this.setState({
      rendered: true,
    });
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={
          this.props.intro
            ? "introContainer fadeIn"
            : "introContainer noPointer fadeOut"
        }
      >
        <img
          ref="placeholder-image"
          src={Placeholder}
          onLoad={this.imageLoaded.bind(this)}
          className={"introBlur"}
          alt="mandelBrot-blurry"
        ></img>

        <div className={"introContainer"}>
          <div
            className={
              this.props.loading
                ? "spinner spinnerIntroFadeIn"
                : "spinner spinnerIntroFadeOut"
            }
          >
            <CircleSpinner size={25} color="#8c8c8c" loading={true} />
          </div>

          <div
            style={{ opacity: 0 }}
            className={
              !this.props.loading && this.state.rendered
                ? "introMouseFadeIn"
                : ""
            }
          >
            <Click />
          </div>
        </div>
      </div>
    );
  }
}

export default IntroOverlay;