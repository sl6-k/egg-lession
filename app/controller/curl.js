'use strict';
const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx, app } = this;
    const res = await ctx.curl('http://127.0.0.1:7001/', {
      dataType: 'json',
    });
    console.log(res);
    ctx.body = {
      status: 200,
      data: res.data,
    };
  }
}

module.exports = CurlController;
