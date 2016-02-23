const getDB = (env) => {
  switch (env) {
    case 'prod':
    case 'staging':
      return {
        url: '' // Websocket URL for your app. For a meteor app use `wss://my-app.meteor.com/websocket`
      }
    case 'dev':
    default:
      return {
        host: 'localhost',
        port: '3000'
      }
  }
};

let opts = {
  env: 'dev', // ['dev', 'staging', 'prod']
  // codePushDeploymentKey: '',
  ddpConfig: {
    maintainCollections : true,
  }
}

Object.assign(opts.ddpConfig, getDB(opts.env));

export default opts;
