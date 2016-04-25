# React Native - Meteor Boilerplate

A starting point for integrating a React Native app with a Meteor app. I've used this file structure in large, multi-developer projects.

_Note #1:_ This project only specifies an opinion on the *React Native* project architecture.

## Getting started with Meteor

1. Make sure you have [Meteor](https://www.meteor.com/) installed.
2. After cloning the repo, `cd MeteorApp/ && meteor`


## Getting started with React Native

1. Make sure you have [React Native](https://facebook.github.io/react-native/) installed.
2. After cloning the repo, `cd RNApp/ && npm install`

## Running on iOS

### In the Simulator

From the `RNApp/` directory you can run `npm run ios`. This will start the react native packager and open up Xcode. The default configurations in `app/config.js` should work fine for you. The press the play button in Xcode.

### On a Device

In `RNApp/ios/RNApp/AppDelegate.m` change the the `jsCodeLocation` line and swap out `localhost` for your machine's IP Address. You can get your IP Address by running `ipconfig getifaddr en1`.

You'll also have to change the `host` option in `app/config.js` to be your machine's IP Address.

Then `npm run ios` to open Xcode.

Then plug your phone into your machine and select your device in Xcode. Press the play button in Xcode. Make sure you device is unlocked

## Running on Android

### In the Simulator

First you'll have to change the `host` option in `RNApp/app/config.js` to your Meteor server's IP address. While developing this will likely be your machine. 

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

On linux running `ifconfig` will get you a list of your network interfaces along with their IP addresses. For the stock Google simulator you will want to use the IP of your active network connection (probably `eth0` or `wlan0`). If you are using the Genymotion simulator, it runs in a Virtual Box VM with a Host-only network interface. You will want to use the IP address of this network which may look like `vboxnet0` under ifconfig.


Once you've done that (and following successful completion of the [React Native Android Installation](https://facebook.github.io/react-native/docs/android-setup.html#content)) you can run `react-native run-android` to get the app running.

_Note:_ You have to have the android simulator running before running `react-native run-android`.

### On a Device

#### Enable USB Debugging

Enable USB Debugging on your phone. If already connected to your computer unplug and replug the USB connection afterwards. Android 5 steps below:

> Settings > About Phone > Build number > Tap it 7 times to become developer;
> Settings > Developer Options > USB Debugging.

#### For Linux

##### Setup Device on Linux

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

##### Install App and Run on Device for Linux

Build and install on your device by running `react-native run-android`

Launch the react server by running `react-native start` and then launch the app on your phone.

## Project Organization

If you're interested in seeing why the React Native project is organized the way it is please [refer to this document](/docs/react-native-project-organization.md).

The Meteor project is completely up to you at this point.

## Technologies Used

- [Meteor](https://www.meteor.com/)
- [React Native](https://facebook.github.io/react-native/)
- [Node DDP Client](https://github.com/hharnisc/node-ddp-client) (at version 0.1.1)
- [EJSON](https://github.com/primus/ejson)
- [lodash](https://lodash.com/)
