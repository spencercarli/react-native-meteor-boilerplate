import { Meteor } from 'meteor/meteor';
import publications from './publications';

Meteor.startup(() => {
  // code to run on server at startup
});

publications();
