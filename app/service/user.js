'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'join',
      age: 18,
    };
  }
}

module.exports = UserService;