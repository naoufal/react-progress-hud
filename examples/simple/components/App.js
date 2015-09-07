import React, { Component } from "react";
import { ProgressHUD, Wrapper } from "../../../lib/index";

let App = React.createClass({
  _renderButton() {
    return (
      <button onClick={this._clickHandler}>Show Progress HUD</button>
    );
  },

  _clickHandler() {
    this.props.showProgressHUD();
  },

  render() {
    return (
      <div>
        <h1>Progress HUD</h1>
        {this._renderButton()}
        <ProgressHUD
          isVisible={this.props.isVisible}
          overlayColor="rgba(0, 0, 0, 0.11)"
          clickHandler={this.props.dismissProgressHUD}
        />
      </div>
    );
  }
});

export default Wrapper(App);
