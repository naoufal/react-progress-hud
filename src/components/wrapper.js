import React, { Component } from "react";

export const Wrapper = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  showProgressHUD() {
    this.setState({
      isVisible: true
    });
  }

  dismissProgressHUD() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    return (
      // jshint ignore:start
      <ComposedComponent
        {...this.props}
        showProgressHUD={this.showProgressHUD.bind(this)}
        dismissProgressHUD={this.dismissProgressHUD.bind(this)}
        isVisible={this.state.isVisible}
      />
      // jshint ignore:end
    );
  }
};

export default Wrapper;
