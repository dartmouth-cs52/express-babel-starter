// user_controller.js

import UserModel from '../models/user_model';


export const createUser = (req, res) => {
  const user = new UserModel();
  user.name = req.body.name;
  user.username = req.body.username;
  user.role = req.body.role;
  user.teacher = req.body.teacher;
  user.expirationDate = req.body.expirationDate;
  console.log(req.body, user);
  user.save()
    .then(result => {
      res.json({ message: 'User created!', user: result });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const getUsers = (req, res) => {
  UserModel.find()
    .then(result => {
      res.json({ message: 'All users returned!', users: result });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const getUser = (req, res) => {
  UserModel.findById(req.params.id)
    .then(result => {
      res.json({ message: 'Single User found!', user: result });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const deleteUser = (req, res) => {
  res.send('delete a user here');
};
export const updateUser = (req, res) => {
  res.send('update a user here');
};
