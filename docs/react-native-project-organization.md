# React Native Project Organization

Everything discussed in this section pertains to the `RNApp` directory.

First, I've moved nearly all the logic out of `index.ios.js` and `index.android.js` so that we can maximize code reuse. All of our Javascript code will live in the `app/` folder. I'll go through each subfolder below.

### `app/api/`

Any external API calls would live here. I've also considered putting DDP interactions in here as well to clean up the components.

### `app/components/`

These are "dumb" components that make up UI elements. For example: stylized inputs or button components.

### `app/containers/`

These components make up the various "views" of my application. These are things like a sign in screen, settings tab, main tab, etc.

### `app/helpers/`

Basic helpers that I use in various places throughout the app. Sorting, math, etc.

### `app/images/`

Store all your images here. This helps you use a standard approach for images across Android and iOS (a change we saw in React Native version `0.14.0`).

### `app/config.js`

Any configuration for your app. Think of it like a `settings.json` in a Meteor context.

### `app/ddp.js`

My DDP related functions. This file could likely be broken out into its own package but I find myself tweaking it occasionally so I keep it in the project. It's mostly just nice-to-have functions.

### `app/index.js`

The root component of my application. This is where I initialize ddp and is the file that both `index.ios.js` and `index.android.js` require.
