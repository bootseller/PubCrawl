if (Meteor.isClient) {
  Template.body.helpers({
  venues: function () {
    return Venues.find({});
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
