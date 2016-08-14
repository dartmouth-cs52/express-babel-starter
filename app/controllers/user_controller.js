import jwt from 'jwt-simple';
import User from '../models/user_model';
import config from '../config';

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  // const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  if (!username || !email || !password) {
    return res.status(422).send('You must provide a username, email and password');
  }
  // here you should do a mongo query to find if a user already exists with this email.
  // if user exists then return an error. If not, use the User model to create a new user.
  // Save the new User object
  User.findOne({ email }).then(result => {
    if (result) {
      res.json({ message: 'This email already exists.' });
    } else {
      const user = new User();
      // user.username = username;
      user.email = email;
      user.password = password;
      user.username = username;

      user.save().then(
        res.json({ token: tokenForUser(user) }))
      .catch(error => {
        res.json({ message: 'Error. Cannot save user info.' });
      });
    }
  })
  .catch(error => {
    res.json({ message: 'Error. @Finding email address.' });
  });
};
