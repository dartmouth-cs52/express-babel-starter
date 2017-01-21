// activity_controller.js

import ActivityModel from '../models/activity_model';

export const createActivity = (req, res) => {
  const activity = new ActivityModel();
  activity.name = req.body.name;
  activity.save()
    .then(result => {
      res.json({ message: 'Activity created!', activity });
    })
    .catch(error => {
      res.json({ error });
    });
  // res.send('user should be created here');
};
export const getActivities = (req, res) => {
  res.send('all activities should be returned');
};
export const getActivity = (req, res) => {
  res.send('single activity looked up');
};
export const deleteActivity = (req, res) => {
  res.send('delete a activity here');
};
export const updateActivity = (req, res) => {
  res.send('update a activity here');
};
