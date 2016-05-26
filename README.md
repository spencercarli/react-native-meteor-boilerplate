# React Native Meteor Boilerplate

This is a simple way to get started building an app with React Native and Meteor. It is opinionated to make it easy for people to start but if you have your own way of doing things it's very easy to swap things out and move them around however you see fit.

As it currently stands this project is only focused on configuring the React Native project. The Meteor side is up to you. For thoughts on how to structure your Meteor App I would suggest you read the [Meteor Guide](http://guide.meteor.com/) and the [Mantra spec](http://mantrajs.com/).

You can checkout a _very_ quick walkthrough of the project [here](https://www.youtube.com/watch?v=vM4axvopnJc).

## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `git clone https://github.com/spencercarli/react-native-meteor-boilerplate.git`
- From the `RNApp` directory run `npm install`

## Running on iOS Simulator

_Note_: You must be on a Mac for this.

You've got a few ways you can run the app for iOS:

- From the `RNApp` directory run `react-native run-ios`
- From the `RNApp` directory run `npm run ios` then start the project in Xcode

## Running on iOS Device

_Note_: You must be on a Mac for this.

- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `RNApp/ios/RNApp/AppDelegate.m` change `localhost` to your machine's IP address
- In `RNApp/app/config.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).

## Running on Android Simulator

- Get the IP address of your machine
- In `RNApp/app/config.js` change `localhost` to your machine's IP address
- Make sure you have an emulator configured and running.
- From the `RNApp` directory run `react-native run-android`

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

On linux running `ifconfig` will get you a list of your network interfaces along with their IP addresses. For the stock Google simulator you will want to use the IP of your active network connection (probably `eth0` or `wlan0`). If you are using the Genymotion simulator, it runs in a Virtual Box VM with a Host-only network interface. You will want to use the IP address of this network which may look like vboxnet0 under ifconfig.

## Running on Android Device

- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `RNApp/app/config.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

## Linux Setup for Android Dev

Configure how the device will connect to the meteor server. See [running android on a device](https://facebook.github.io/react-native/docs/running-on-device-android.html) to pick from the options.

Plug in your device and use _lusb_ to find the first 4 digits of  your device ID.
> lsusb
Bus 001 Device 003: ID 04e8:2e76 Motorola PCS

Enter this in udev rules. In the example we are copying over `04e8`
> echo SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules

Check that your device is properly connecting to ADB, the Android Debug Bridge, by using:
> adb devices

_Note:_ You should have only one active ADB connection. If you have a simulator running you should close it before proceeding.

These steps are abstracted from the pages [running on device](https://facebook.github.io/react-native/docs/running-on-device-android.html) and [getting started](https://facebook.github.io/react-native/docs/getting-started-linux.html#setting-up-an-android-device) on linux.

## Project Structure

The following directories are all in the `RNApp` directory.

**app/components**

This directory will store components that can be used in numerous places throughout the app (like a button). The goal here is to make these components stateless. The only state they should hold is UI state. Design this components to be driven from props as often as possible.

**app/helpers**

Helpers are general helpers that you may want to use throughout your app. Things like string formatting, validation, etc. Before you start writing these make sure to check out a library like [lodash](https://lodash.com/) which likely has much of what you need already.

**app/images**

Like the components directory this is where you would want to store any images that may be used in multiple places throughout your app. For example a logo or an icon.

**app/layouts**

A user has different states and possibly different roles in an application. For example a logged in user is going to see something different than a logged out user. An Airbnb host may see something different than an Airbnb guest. Layouts should be minimal and hold minimal state (like which is the active tab). They're composed of routes.

**app/routes**

Routes are the meat of the application. This is where your business logic will likely go and where many components will go. They should be relatively self contained - holding the containers, components, and necessary assets for that route. Generally a route has a minimum of 3 files: an `index.js`, `Component.js`, and `ComponentContainer.js`.

The `ComponentContainer.js` does all of the data fetching/formatting/etc. It then passes that data down to `Component.js` which actually displays this data. `Component.js` should be a "dumb" component that holds, if any, only UI state. Lastly `index.js` is used for exporting anything that a layout or another route may need to know.

This may seem overkill for a boilerplate but I've found this structure scales well as a project gets larger and keeps things relatively easy to understand and compartmentalized so that when you make changes to a route those changes are minimal (if at all) to other parts of the application that depend on them.

**app/styles**

Like components or images these are going to be your global styles. Keeping the various colors used throughout your app is a great application for this directory.

**app/config.js**

Store any configuration items that may be needed throughout the app. It's a good centralized place that you can store data that may drive different pieces of your app. Good examples are your server url, feature toggles, and development toggles.

**app/index.js**

The entry point of our application, this is what the default `index.ios.js` and `index.android.js` will call. It handles initializing our Meteor connection and determining which layout should be shown.

## Questions?

If you have any questions please open an issue. Thanks!
