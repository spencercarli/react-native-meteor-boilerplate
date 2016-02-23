import DDPClient from 'ddp-client';
import _ from 'lodash';
import EJSON from 'ejson';
import config from './config';
import { AsyncStorage } from 'react-native';

let ddpClient = new DDPClient(config.ddpConfig);

/*
 * extend capabilities of ddpClient
 */
ddpClient.callPromise = (methodName, params) => {
  params = params || undefined;
  if (params && !_.isArray(params)) {
    console.warn('Params must be passed as an array to ddp.call');
  }

  return new Promise((resolve, reject) => {
    ddpClient.call(methodName, params, (err, result) => {
        // callback which returns the method call results
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }, () => {
        // callback which fires when server has finished
      }
    );
  });
}

ddpClient.subscribePromise = (pubName, params) => {
  params = params || undefined;
  if (params && !_.isArray(params)) {
    console.warn('Params must be passed as an array to ddp.subscribe');
  }
  return new Promise((resolve, reject) => {
    ddpClient.subscribe(pubName, params, () => {
      resolve(true);
    });
  });
};

ddpClient.signUpWithEmail = (email, password, cb) => {
  let params = {
    email: email,
    password: password
  };

  return ddpClient.call('createUser', [params], (err, res) => {
    ddpClient.onAuthResponse(err, res);
    cb && cb(err, res)
  });
};

ddpClient.signUpWithUsername = (username, password, cb) => {
  let params = {
    username: username,
    password: password
  };

  return ddpClient.call('createUser', [params], (err, res) => {
    ddpClient.onAuthResponse(err, res);
    cb && cb(err, res)
  });
};

ddpClient.loginWithEmail = (email, password, cb) => {
  let params = {
    user: {
      email: email
    },
    password: password
  };

  return ddpClient.call("login", [params], (err, res) => {
    ddpClient.onAuthResponse(err, res);
    cb && cb(err, res)
  })
}

ddpClient.loginWithUsername = (username, password, cb) => {
  let params = {
    user: {
      username: username
    },
    password: password
  };

  return ddpClient.call("login", [params], (err, res) => {
    ddpClient.onAuthResponse(err, res);
    cb && cb(err, res)
  })
}

ddpClient.onAuthResponse = (err, res) => {
  if (res) {
    let { id, token, tokenExpires } = res;

    AsyncStorage.setItem('userId', id.toString());
    AsyncStorage.setItem('loginToken', token.toString());
    AsyncStorage.setItem('loginTokenExpires', tokenExpires.toString());
  } else {
    AsyncStorage.multiRemove(['userId', 'loginToken', 'loginTokenExpires']);
  }
}

ddpClient.loginWithToken = (cb) => {
  let params = { resume: '' };
  AsyncStorage.getItem('loginToken')
    .then((token) => {
      if (token) {
        params.resume = token;
        ddpClient.call("login", [params], cb)
      }
    });
}

ddpClient.logout = (cb) => {
  AsyncStorage.multiRemove(['userId', 'loginToken', 'loginTokenExpires']).
    then((res) => {
      ddpClient.call("logout", [], cb)
    });
}

ddpClient.user = () => {
  return AsyncStorage.getItem('userId')
    .then((userId) => {
      if (userId) {
        ddpClient.collections = ddpClient.collections || {};
        ddpClient.collections.users = ddpClient.collections.users || {};
        return ddpClient.collections.users[userId];
      } else {
        return null;
      }
    })
}

export default ddpClient;
