// router.js

import { Router } from 'express';
import * as Users from './controllers/user_controller';

const router = new Router();

router.route('/users')
  .get((res, req) => {
    Users.getUsers(res, req);
  })
  .post((res, req) => {
    Users.createUser(res, req);
  });

router.route('/users/:id')
    .get((res, req) => {
      Users.getUser(res, req);
    })
    .put((res, req) => {
      Users.updateUser(res, req);
    })
    .delete((res, req) => {
      Users.deleteUser(res, req);
    });

export default router;
