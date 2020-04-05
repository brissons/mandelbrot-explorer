import React, { Component } from "react";
import Lottie from "react-lottie";
import BrowserAnimationData from "./mouseClick.json";
import MobileAnimationData from "./handTap.json";
import {BrowserView,  MobileView} from "react-device-detect";

class Click extends Component {
  render() {
    const browserOptions = {
      loop: true,
      autoplay: true,
      animationData: BrowserAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const mobileOptions = {
      loop: true,
      autoplay: true,
      animationData: MobileAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
    <React.Fragment>
      <BrowserView>
      <div className={"mouseClick"}>
        <Lottie
          options={browserOptions}
          height={75}
          width={75}
        />
       </div>
       </BrowserView>
       <MobileView>
        <div className={"handClick"}>
          <Lottie
            options={mobileOptions}
            height={125}
            width={125}
          />
        </div>
        </MobileView>
      </React.Fragment>
    );
  }
}

export default Click;