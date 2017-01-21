// activity_controller.js

import ActivityModel from '../models/activity_model';

export const createActivity = (req, res) => {
  const activity = new ActivityModel();
  activity.name = req.body.name;
  activity.gradeLevels = req.body.gradeLevels;
  activity.category = req.body.category;
  activity.url = req.body.url;
  activity.instructions = req.body.instructions;
  activity.body = req.body.body;
  activity.shortName = req.body.shortName;
  activity.save()
    .then(result => {
      res.json({ message: 'Activity created!', activity });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const getActivities = (req, res) => {
  ActivityModel.find()
    .then(result => {
      res.json({ message: 'All activities returned!', activities: result });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const getActivity = (req, res) => {
  ActivityModel.findById(req.params.id)
    .then(result => {
      res.json({ message: 'Single Activity found!', activity: result });
    })
    .catch(error => {
      res.json({ error });
    });
};
export const deleteActivity = (req, res) => {
  res.send('delete a activity here');
};
export const updateActivity = (req, res) => {
  res.send('update a activity here');
};
