import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        <AFrameRenderer
          inherent={true}
          arToolKit={{
            sourceType: "webcam",
            sourceHeight: 1,
            sourceWidth: 1,
            displayHeight: 1,
            displayWidth: 1,
            debugUIEnabled: "true",
            canvasHeight: 1,
            canvasWidth: 1,
          }}
        >
          <Marker parameters={{ preset: "hiro" }}>
            <a-box
              color="pink"
              material="opacity: 1;"
              position="0 0.003 0"
              scale="0.4 0.4 0.4"
            >
              <a-animation
                attribute="rotation"
                to="360 0 0"
                dur="5000"
                easing="linear"
                repeat="indefinite"
              />
            </a-box>
          </Marker>
        </AFrameRenderer>
      </div>
    );
  }
}

export default App;
