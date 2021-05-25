'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = 'user Index';
  }

  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
    ctx.body = [{ id: 123 }];
  }

  async detail() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.query.id);
    console.log(res);
    ctx.body = res;
  }
  async detail2() {
    const { ctx } = this;
    ctx.body = ctx.params.id;
  }

  async addUser() {
    const { ctx } = this;
    console.log(ctx.request.body);

    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  async edit() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}

module.exports = UserController;

