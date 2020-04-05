import React from "react";
import "./styles.css";
import Intro from "./Intro.js";
import Scale from "./Scale.js";
import Restart from "./Restart.js";

var host="https://mandelbrot-service.herokuapp.com/mandelbrot?"

class Fractal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1920,
      height: 1440,
      x: 960 - 40,
      y: 720,
      scale: 1,
      i: 50,
      intro: true,
      loading: true,
      end: false,
    };

    this.startingState = this.state;
  }

  handleClick = (e) => {
    if (!(this.state.scale > 4398046511104)) {
      if (!this.state.loading) {
        const canvas = this.refs.canvas;
        let rect = canvas.getBoundingClientRect();
        let realWidth =
          rect.width / rect.height < 4 / 3 ? (rect.height * 4) / 3 : rect.width;
        let realHeight =
          rect.width / rect.height > 4 / 3 ? (rect.width * 3) / 4 : rect.height;
        let scaleX = canvas.width / realWidth;
        let scaleY = canvas.height / realHeight;
        let newX =
          (e.clientX - rect.width / 2 + realWidth / 2 - rect.left) * scaleX;
        let newY =
          (e.clientY - rect.height / 2 + realHeight / 2 - rect.top) * scaleY;
        this.setState((prevState) => {
          return {
            x: prevState.x + (newX - this.state.width / 2) / this.state.scale,
            y: prevState.y + (newY - this.state.height / 2) / this.state.scale,
            i: (prevState.i += 10),
            scale: (prevState.scale *= 2),
            loading: true,
          };
        });
      }
    } else {
      this.setState({ end: true });
    }
  };

  componentDidMount() {
    let canvas = this.refs.canvas;
    let ctx = this.refs.canvas.getContext("2d");
    let ctxTwo = this.refs.canvasTwo.getContext("2d");
    let img = this.refs.image;
    img.onload = () => {
      ctxTwo.drawImage(img, 0, 0);
      canvas.classList.remove("visible");
      canvas.classList.add("fadeOut");
      setTimeout(function () {
        ctx.drawImage(img, 0, 0);
        canvas.classList.remove("fadeOut");
        canvas.classList.add("visible");
      }, 500);
      this.setState({
        loading: false,
      });
    };
  }

  removeIntro() {
    if (!this.state.loading) {
      this.setState({
        intro: false,
      });
    }
  }

  restart() {
    this.setState(this.startingState);
  }

  render() {
    var url =
      host +
      "width=" + this.state.width +
      "&height=" + this.state.height +
      "&x=" + this.state.x +
      "&y=" + this.state.y +
      "&scale=" + this.state.scale +
      "&i=" + this.state.i;

    console.log(url);
    return (
      <React.Fragment>
        <Intro
          intro={this.state.intro}
          loading={this.state.loading}
          onClick={this.removeIntro.bind(this)}
        />
        <Scale
          scale={this.state.scale}
          intro={this.state.intro}
          loading={this.state.loading}
        />
        <Restart
          end={this.state.end}
          loading={this.state.loading}
          onClick={this.restart.bind(this)}
        />
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
        <img ref="image" src={url} alt="new" style={{ display: "none" }} /> ;
      </React.Fragment>
    );
  }
}

export default Fractal;
