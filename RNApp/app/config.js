// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'http://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // your production server url
}

const config = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default config;
