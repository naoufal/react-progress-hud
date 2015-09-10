# React Progress HUD
[![npm](https://img.shields.io/npm/v/react-progress-hud.svg?style=flat-square)](https://www.npmjs.com/package/react-progress-hud)
[![npm downloads](https://img.shields.io/npm/dm/react-progress-hud.svg?style=flat-square)](https://www.npmjs.com/package/react-progress-hud)
[![Travis](https://img.shields.io/travis/naoufal/react-progress-hud.svg?style=flat-square)](https://travis-ci.org/naoufal/react-native-progress-hud)
[![Code Climate](https://img.shields.io/codeclimate/github/naoufal/react-progress-hud.svg?style=flat-square)](https://codeclimate.com/github/naoufal/react-progress-hud)

React Progress HUD is a [React](https://facebook.github.io/react) port of the popular [`SVProgressHUD`](https://github.com/TransitApp/SVProgressHUD).  It is a clean and easy-to-use HUD meant to display the progress of an ongoing task.

Are you using [React Native](https://facebook.github.io/react-native/)?  Check out [React Native Progress HUD](https://github.com/naoufal/react-native-progress-hud).

## Install
```shell
npm i --save react-progress-hud
```

## Usage
Using the HUD in your app will usually look like this:
```js
import React, { Component } from "react";
import { ProgressHUD, Wrapper } from "react-progress-hud";

class YourComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.showProgressHUD>Show Progress HUD</button>
        <ProgressHUD
          isVisible={this.props.isVisible}
          clickHandler={this.props.dismissProgressHUD}
          overlayColor="rgba(0, 0, 0, 0.11)"
        />
      </div>
    );
  }
}

export default Wrapper(App);
```

### Showing the HUD
You can display the HUD by calling:
```js
  this.props.showProgressHUD();
```

### Dismissing the HUD
It can be dismissed by calling:
```js
  this.props.dismissProgressHUD();
```

## Props
The following props can be used to modify the HUD's style and/or behaviour:

| Prop | Type | Opt/Required | Default | Note |
|---|---|---|---|---|
|__`isVisible`__|_Boolean_|Required|`N/A`|Displays the HUD when set to true.
|__`clickHandler`__|_Function_|Optional|`() => {}`|Sets a clickHandler on the `ProgressHUD`.
|__`overlayColor`__|_String_|Optional|`rgb(0, 0, 0)`|Sets the color of the overlay.
|__`overlayOpacity`__|_String_|Optional|`0.5`|Sets the opacity of the overlay.
|__`color`__|_String_|Optional|`#000`|Sets the color of the spinner.

## License
Copyright (c) 2015, [Naoufal Kadhom](http://naoufal.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
