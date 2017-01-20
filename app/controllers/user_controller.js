// user_controller.js

import UserModel from '../models/user_model';

// this cleans the user because we use id instead of dangling _id
// and we purposefully don't return content here either
const cleanUser = (user) => {
  return { id: user._id, name: user.name };
};


export const createUser = (req, res) => {
  const user = new UserModel();
  user.name = req.body.name;
  user.save()
    .then(result => {
      res.json({ message: 'User created!', user: cleanUser(user) });
    })
    .catch(error => {
      res.json({ error });
    });
  // res.send('user should be created here');
};
export const getUsers = (req, res) => {
  res.send('all users should be returned');
};
export const getUser = (req, res) => {
  res.send('single user looked up');
};
export const deleteUser = (req, res) => {
  res.send('delete a user here');
};
export const updateUser = (req, res) => {
  res.send('update a user here');
};
