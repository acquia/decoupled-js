import Ember from 'ember';

/**
 * A route that lists all Articles on the Drupal backend.
 */
export default Ember.Route.extend({
  model() {
    // Get all Articles from the backend, including related authors, images,
    // and tags in the same response. A background reload is done, so that
    // existing informaton is immediately shown, and updated when the response
    // is received.
    return this.get('store').findAll('article', {
      include: 'uid',
      backgroundReload: true
    });
  }
});