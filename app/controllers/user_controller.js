// user_controller.js

import UserModel from '../models/user_model';

// TODO: add functionality to create many users at once
export const createUser = (req, res) => {
  const user = new UserModel();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.username = req.body.username;
  user.role = req.body.role;
  user.activities = req.body.activities;
  user.gradeLevels = req.body.gradeLevels;
  user.categories = req.body.categories;
  user.students = req.body.students;
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

// TODO: add functionality for a teacher to only get relevant students
// TODO: add functionality to fill in activities, gradeLevels, and categories
export const getUsers = (req, res) => {
  UserModel.find()
    .then(result => {
      res.json({ message: 'All users returned!', users: result });
    })
    .catch(error => {
      res.json({ error });
    });
};

// TODO: add functionality to fill in activities, gradeLevels, and categories
export const getUser = (req, res) => {
  UserModel.findById(req.params.id)
    .then(result => {
      res.json({ message: 'Single User found!', user: result });
    })
    .catch(error => {
      res.json({ error });
    });
};

// TODO: build this function
export const deleteUser = (req, res) => {
  res.send('delete a user here');
};

// TODO: build this function
export const updateUser = (req, res) => {
  res.send('update a user here');
};
