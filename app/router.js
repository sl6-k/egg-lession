'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.get('/user/lists', controller.user.lists);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
  router.post('/user/add', controller.user.addUser);
  router.put('/user/edit', controller.user.edit);
  router.post('/login', controller.user.login);
  router.post('/loginOut', controller.user.loginOut);
  router.get('/curl/get', controller.curl.curlGet);
};
