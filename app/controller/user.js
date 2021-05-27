'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const user = ctx.cookies.get('user');

    const session = ctx.session.user;
    console.log(session);

    await ctx.render('user.html', {
      id: 100,
      name: 'join',
      lists: [ 'a', 'b', 'c' ],
      user: user ? JSON.parse(user) : null,
    }, {
      delimiter: '%',
    });
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set('user', JSON.stringify(body), {
      maxAge: 1000 * 60 * 60,
      httpOnly: false,
      encrypt: true,
    });

    // 保存session
    ctx.session.user = body;


    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async loginOut() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.session.user = null;
    ctx.body = {
      status: 200,
    }
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

