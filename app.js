'use strict';
const store = {};
module.exports = app => {
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    // eslint-disable-next-line no-unused-vars
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };

  // app.config.coreMiddleware.push('auth');
  // console.log(app.config.coreMiddleware);
};
