import React from "react";
import { Textfit } from "react-textfit";
import { CircleSpinner } from "react-spinners-kit";

class Scale extends React.Component {
  calculateText() {
    return this.props.scale < 10000
      ? [this.props.scale, "", ""]
      : [
          this.props.scale.toExponential(1).substring(0, 3),
          "·10",
          this.props.scale.toString(10).length - 1,
        ];
  }

  render() {
    let scaleText = this.calculateText();

    return (
      <div
        className={
          !this.props.intro
            ? "visible introContainer noPointer"
            : "invisible introContainer noPointer"
        }
      >
        <div className={this.props.loading ? "" : "fadeOut"}>
          <div
            className={
              this.props.loading ? "scaleBackground scaleFadeOut" : "invisible"
            }
          >
            <Textfit mode="multi" className={"text"} max={56}>
              <div className={"scale"}>
                <p>
                  {scaleText[0]}
                  <text style={{ fontSize: 14 }}>{scaleText[1]}</text>
                  <text className={"super"}>{scaleText[2]}</text>
                </p>
              </div>
            </Textfit>
          </div>

          <div
            className={
              this.props.loading
                ? "scaleSpinner center scaleSpinnerFadeIn"
                : "scaleSpinner center"
            }
            style={{ opacity: 0 }}
          >
            <CircleSpinner size={25} color="#FFFFFF" loading={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default Scale;
