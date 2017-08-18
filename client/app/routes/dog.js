import Ember from 'ember';

/**
 * A route for viewing a single node.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('dogs', params.id, { include: 'uid' });
  }
});
