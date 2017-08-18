import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

const { computed, RSVP, isEmpty, inject: {service} } = Ember;

/**
 * Customizes the session service provied by the ember-simple-auth Ember
 * addon. Upon login, the Drupal User entity corresponding to the username
 * specified is fetched and stored for later use.
 */
export default SessionService.extend({
  store: service(),

  /**
   The currently logged-in user's data.

   @property currentUser
   @type Object
   @readOnly
   @default {}
   @public
   */
  currentUser: computed.oneWay('session.currentUser'),

  authenticate() {
    return new RSVP.Promise(() => {
      // After the normal authentication process...
      this._super(...arguments).then(() => {
        const username = this.get('data.authenticated.username');
        if (!isEmpty(username)) {
          // Fetch the User entity for the given username. Use query() instead
          // of the preferred queryRecord() to work around the Drupal JSON API
          // module always returning an array.
          this.get('store').query('user', { name: username })
            .then(users => {
              // Store user model for later use
              const user = users.objectAt(0);
              this.set('session.currentUser', user);
            });
        }
      });
    });
  }
});
