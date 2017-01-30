# Changing Perspectives API

* node with babel
* expressjs
* mongoDB

Procfile set up to run on [heroku]

## Request & Response Examples
API Resources

#### POST /users/
Creates a new user.

#### GET /users/
Returns a list of users as users, including subcategories nested.

#### GET /users/:id
Gets a user by ID.

#### DELETE /users/:id/
Deletes a user if the delete is permitted. Returns a json error in the case of failure to delete.

#### PUT /users/:id/
Updates a body element of a user by ID.


#### POST /activities/
Creates a new activity.

#### GET /activities/
Returns a list of activities as activities, including subcategories nested.

#### GET /activities/:id/
Gets an activity by ID.

#### DELETE /activities/:id/
Deletes an activity if the delete is permitted. Returns a json error in the case of failure to delete.

#### PUT /users/:id/
Updates a body element of an activity by ID.
