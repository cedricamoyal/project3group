var app = app || {};

app.tweetRouter = Backbone.Router.extend({
  routes: {
    '':'index'
  },

  index: function () {
    console.log("Router was called!");
  }
});