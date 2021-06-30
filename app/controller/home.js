'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(20);
    ctx.body = res;
  }

  async newApplication() {
    const { ctx, app } = this;
    const pack = app.package('scripts');
    const allPack = app.allPackage;
    console.log(allPack);
    ctx.body = pack;
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    console.log(params);
    ctx.body = 'newContext';
  }

  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'abc123';
    const base64Parse = ctx.helper.base64Encode('newResponse');
    ctx.body = base64Parse;
  }
}

module.exports = HomeController;
