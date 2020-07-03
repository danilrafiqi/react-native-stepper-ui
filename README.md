# react-native-stepper-ui

[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![npm version](http://img.shields.io/npm/v/react-native-stepper-ui.svg)](https://www.npmjs.com/package/react-native-stepper-ui)
[![codecov](https://codecov.io/gh/danilrafiqi/react-native-stepper-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/danilrafiqi/react-native-stepper-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.github.com/danilrafiqi/react-native-stepper-ui/master/LICENSE)

A simple and fully customizable React Native component to create stepper ui. 
* Work for android and IOS
* Support typescript
* Customizable

## Table of contents

1. [Example](#example)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Props](#props)

## Example
Example One | Example Two | Example Three
:-------------------------:|:-------------------------:|:-------------------------:
![](assets/react-native-stepper-ui-1.png)| ![](assets/react-native-stepper-ui-2.png)| ![](assets/react-native-stepper-ui-3.png)

## Installation

If using yarn:

```
yarn add react-native-stepper-ui
```

If using npm:

```
npm i react-native-stepper-ui
```

## Usage

## Props

| Name | Type | Description | Default |
| --- | :---: | --- | --- |
| ```active``` | number  | index stepper active | `undefined`
| ```content``` | ReactElement[]  | Component that render to stepper | `undefined`
| ```onNext``` | Function  | Function called when the next step button is pressed | `undefined`
| ```onBack``` | Function  | Function called when the back step button is pressed | `undefined`
| ```onFinish``` | Function  | Function called when the finish step button is pressed | `undefined`
| ```wrapperStyle?``` | ViewStyle  | Wrapper component style | `{}`
| ```stepStyle?``` | ViewStyle  | Step component style | `{backgroundColor: '#1976d2', width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', opacity: 1}`
| ```stepTextStyle?``` | TextStyle  | Step Text component style | `{color: 'white'}`
| ```buttonStyle?``` | ViewStyle | Button component style | `{ padding: 10, borderRadius: 4, alignSelf: 'flex-start', marginRight: 10, backgroundColor: '#a1a1a1'}`
| ```buttonTextStyle?``` | TextStyle | Button Text component style  | `{color: 'white'}`

