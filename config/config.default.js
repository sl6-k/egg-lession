/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621926254655_4476';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.ejs = {
    delimiter: '$',
  };
  config.session = {
    key: 'dk-sess',
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true,
  }
  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets'),
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
