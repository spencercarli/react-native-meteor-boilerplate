import { Meteor } from 'meteor/meteor';
import publications from './publications';
import seeds from './seeds';

Meteor.startup(() => {
  publications();
  seeds();
});
