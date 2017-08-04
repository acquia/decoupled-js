import ENV from '../config/environment';
import DrupalJSONAPIAdapter from 'ember-data-drupal/adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

/**
 * This Adapter customizes Ember Data's interactions with JSON API endpoints
 * on the Drupal backend. It customizes the Adapter provided by the
 * ember-data-drupal Ember addon.
 */
export default DrupalJSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,              // The backend host, set in config/environment.js
  authorizer: 'authorizer:oauth2', // Authorizer to use for authentication with Drupal
  coalesceFindRequests: true,  // Combine requests for individual resource into one request filtered for multiple IDs

  /**
   * Customize how filtered requests' URL queries are built to be compatible
   * with Drupal's JSON API module.
   */
  findMany(store, type, ids, snapshots) {
    // @todo - use 'ds-improved-ajax' feature and dataForRequest()?
    const url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
    const filter = {
      c: {
        condition: {
          path: 'uuid',
          operator: 'IN',
          value: ids
        }
      }
    };
    return this.ajax(url, 'GET', { data: { filter: filter } });
  }
});
