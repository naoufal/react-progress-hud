import React, { Component, PropTypes } from "react";
import { Spring } from "react-motion";

import styles from "../styles";
import images from "../images";

const propTypes = {
  clickHandler: PropTypes.func,
  color: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.string
};
const defaultProps = {
  clickHandler: () => {},
  color: "#000",
  overlayColor: "rgb(0, 0, 0)",
  overlayOpacity: "0.5"
};

export default class ProgressHUD extends Component {
  constructor(props) {
    super(props);
  }

  _getEndValue(prevValue) {
    return {
      val: prevValue.val === 0 ? 360 : prevValue.val + 360,
      config: [100, 100]
    };
  }

  render() {
    return (
      // jshint ignore:start
      <div
        style={Object.assign(
          styles.container, {
            display: this.props.isVisible ? "block" : "none"
          }
        )}
      >
        <div
          key="ProgressHUD"
          style={Object.assign(
            styles.overlay,
            {
              backgroundColor: this.props.overlayColor,
              opacity: this.props.overlayOpacity
            }
          )}
          onClick={this.props.clickHandler}
        >
        </div>
        <div style={styles.content}>
          <Spring defaultValue={{ val: 0 }} endValue={this._getEndValue}>
            {interpolated =>
              <div
                style={Object.assign(
                  styles.spinner,
                  {
                    backgroundColor: this.props.color,
                    msTransform: `rotate(${interpolated.val}deg)`,
                    WebkitTransform: `rotate(${interpolated.val}deg)`,
                    transform: `rotate(${interpolated.val}deg)`
                  }
                )}
              >
                <img src={`data:image/png;base64,${images["1x"]}`} />
                <div
                  style={Object.assign(
                    styles.curve,
                    { backgroundColor: this.props.color }
                  )}
                />
                <div style={styles.inner_spinner} />
              </div>
            }
          </Spring>
        </div>
      </div>
      // jshint ignore:end
    );
  }
}

ProgressHUD.propTypes = propTypes;
ProgressHUD.defaultProps = defaultProps;
