'use strict';
const store = {};
module.exports = app => {
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };
};
