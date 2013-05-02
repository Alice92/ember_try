EmberTry.PostsRoute = Ember.Route.extend({
    model: function() {
        return EmberTry.Post.find();
    }
});