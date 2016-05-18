const getDB = (env) => {
  switch (env) {
    case 'prod':
    case 'staging':
      return {
        url: '' // Websocket URL for your app. For a meteor app use `wss://my-app.meteor.com/websocket`
      }
    case 'dev':
    default:
      return 'http://localhost:3000/websocket';
  }
};

let opts = {
  env: 'dev', // ['dev', 'staging', 'prod']
  // codePushDeploymentKey: '',
}
opts.METEOR_URL = getDB(opts.env);

export default opts;
