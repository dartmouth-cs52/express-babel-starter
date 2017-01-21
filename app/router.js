// router.js

import { Router } from 'express';
import * as Users from './controllers/user_controller';
import * as Activities from './controllers/activity_controller';

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

router.route('/activities')
  .get((res, req) => {
    Activities.getActivities(res, req);
  })
  .post((res, req) => {
    Activities.createActivity(res, req);
  });

router.route('/activities/:id')
  .get((res, req) => {
    Activities.getActivity(res, req);
  })
  .put((res, req) => {
    Activities.updateActivity(res, req);
  })
  .delete((res, req) => {
    Activities.deleteActivity(res, req);
  });

export default router;
