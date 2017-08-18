import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cats: this.store.findAll('cats'),
      dogs: this.store.findAll('dogs'),
    });
  },
});
