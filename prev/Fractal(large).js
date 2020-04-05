import React from "react";
import "./styles.css";
import IntroOverlay from "./IntroOverlay.js";
import Scale from "./Scale.js";

var bigdecimal = require("bigdecimal");
var HALF_UP = bigdecimal.RoundingMode.HALF_UP();

class Fractal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1920,
      height: 1440,
      x: new bigdecimal.BigDecimal(960 - 50),
      y: new bigdecimal.BigDecimal(720),
      scale: new bigdecimal.BigDecimal(1),
      i: 50,
      intro: true,
      loading: true,
    };
  }

  handleClick = (e) => {
    //zooms and focuses fractal on click
    if (!this.state.loading) {
      const canvas = this.refs.canvas;
      let rect = canvas.getBoundingClientRect(); // abs. size of element
      let realWidth =
        rect.width / rect.height < 4 / 3
          ? new bigdecimal.BigDecimal((rect.height * 4) / 3)
          : new bigdecimal.BigDecimal(rect.width); //compensates for object-fit cover
      let realHeight =
        rect.width / rect.height > 4 / 3
          ? new bigdecimal.BigDecimal((rect.width * 3) / 4)
          : new bigdecimal.BigDecimal(rect.height);
      let scaleX = new bigdecimal.BigDecimal(canvas.width).divide(
        realWidth,
        100,
        HALF_UP
      );
      let scaleY = new bigdecimal.BigDecimal(canvas.height).divide(
        realHeight,
        100,
        HALF_UP
      );
      let two = new bigdecimal.BigDecimal(2);
      let newX = new bigdecimal.BigDecimal(e.clientX)
        .subtract(new bigdecimal.BigDecimal(rect.width).divide(two))
        .add(realWidth.divide(two))
        .subtract(new bigdecimal.BigDecimal(rect.left))
        .multiply(scaleX);
      let newY = new bigdecimal.BigDecimal(e.clientY)
        .subtract(new bigdecimal.BigDecimal(rect.height).divide(two))
        .add(realHeight.divide(two))
        .subtract(new bigdecimal.BigDecimal(rect.top))
        .multiply(scaleY);

      this.setState((prevState) => {
        return {
          x: prevState.x.add(
            newX
              .subtract(new bigdecimal.BigDecimal(this.state.width).divide(two))
              .divide(this.state.scale, 100, HALF_UP)
          ),
          y: prevState.y.add(
            newY
              .subtract(
                new bigdecimal.BigDecimal(this.state.height).divide(two)
              )
              .divide(this.state.scale, 100, HALF_UP)
          ),
          i: (prevState.i += 5),
          scale: prevState.scale.multiply(two),
          loading: true,
        };
      });

      this.refs.scale.classList.remove("fadeOutStay");
      this.refs.scale.classList.add("visible");
    }
  };

  componentDidMount() {
    let canvas = this.refs.canvas;
    let ctx = this.refs.canvas.getContext("2d");
    let ctxTwo = this.refs.canvasTwo.getContext("2d");
    let img = this.refs.image;

    img.onload = () => {
      canvas.classList.remove("visible");
      ctxTwo.drawImage(img, 0, 0);
      canvas.classList.add("fadeOut");
      setTimeout(function () {
        ctx.drawImage(img, 0, 0);
        canvas.classList.remove("fadeOut");
        canvas.classList.add("visible");
      }, 500);
      this.setState({ loading: false });

      if (!this.state.intro) {
        this.refs.scale.classList.remove("visible");
        this.refs.scale.classList.add("fadeOutStay");
      }
    };
  }

  removeIntro() {
    if (!this.state.loading) {
      this.setState({ intro: false });
    }
  }

  calculateScaleText() {
    return this.state.scale.compareTo(new bigdecimal.BigDecimal(10000)) < 0
      ? this.state.scale.longValue()
      : Number.parseFloat(this.state.scale.longValue()).toExponential(1);
  }

  render() {
    var url =
      "http://localhost:8080/mandelbrot?" +
      "width=" + this.state.width +
      "&height=" + this.state.height +
      "&x=" + this.state.x +
      "&y=" +  this.state.y +
      "&scale=" + this.state.scale +
      "&i=" + this.state.i;

    console.log(url);
    return (
      <React.Fragment>
        <IntroOverlay
          intro={this.state.intro}
          loaded={!this.state.loading}
          onClick={this.removeIntro.bind(this)}
        />
        <div
          ref="scale"
          className={"centerContainer overlay"}
          style={{ zIndex: 3, opacity: 0 }}
        >
          <Scale scale={this.calculateScaleText()} className={"center"} />
        </div>
        <canvas
          ref="canvas"
          className="center"
          style={{ zIndex: "1" }}
          width={this.state.width}
          height={this.state.height}
          onClick={this.handleClick.bind(this)}
        />
        <canvas
          ref="canvasTwo"
          className="center"
          width={this.state.width}
          height={this.state.height}
        />
        <img ref="image" src={url} alt="new" style={{ display: "none" }} />;
      </React.Fragment>
    );
  }
}

export default Fractal;