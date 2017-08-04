import Ember from 'ember';

/**
 * A route for editing a specific file.
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('file', params.id /*, { include: 'uid' }*/);  // @todo - uncomment here, and in model if you need the file's owner
  }
});
