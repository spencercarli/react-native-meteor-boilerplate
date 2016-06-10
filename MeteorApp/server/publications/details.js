import { Meteor } from 'meteor/meteor';
import { Details } from '/lib/collections';

export default function(){

  Meteor.publish('details-list', function(){
    return Details.find();
  });

}
