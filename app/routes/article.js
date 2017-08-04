import Ember from 'ember';

/**
 * A route for editing a specific article.
 */
export default Ember.Route.extend({
  model(params) {
    // console.log(this.store.findRecord('article', params.id, { include: 'uid' }));
    return this.store.findRecord('article', params.id, { include: 'uid' });
  }
});
