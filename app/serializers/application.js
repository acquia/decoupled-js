import DS from 'ember-data';
import DrupalJSONAPISerializer from 'ember-data-drupal/serializer';
import { singularize } from 'ember-inflector';

const { normalizeModelName } = DS;

/**
 * This Serializer customizes Ember Data's interactions with JSON API endpoints
 * on the Drupal backend. More specifically, it alters the way Ember models are
 * converted into JSON text that is added to an HTTP request sent to the Drupal
 * backend, and how JSON text received in the response is converted back to an
 * Ember model.
 *
 * This customizes the Serializer provided by the ember-data-drupal Ember addon.
 */

export default DrupalJSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    const parts = key.split('--');
    if (parts.length === 2) {
      const entity = parts[0];
      const bundle = parts[1];
      return this.get('drupalMapper').modelNameFor(entity, bundle) || singularize(normalizeModelName(bundle));
    }
    return singularize(normalizeModelName(key));
  },

  payloadKeyFromModelName(modelName) {
    const drupalMapper = this.get('drupalMapper');
    if (drupalMapper.isMapped(modelName)) {
      const entity = drupalMapper.entityFor(modelName);
      const bundle = drupalMapper.bundleFor(modelName);
      return `${entity}--${bundle}`;
    }
    return modelName;
  },

  keyForRelationship(key /*, typeClass, method*/) {
    // Prevent dash-ification of underscores in relationship keys
    return key;
  },

  extractErrors(store, typeClass, payload /*, id*/) {
    // Adapt validation errors returned from the JSON API module so that they
    // can be easily displayed inline in an edit form.
    payload = this._super(...arguments);

    let out = {};
    Object.keys(payload).forEach(key => {
      let error = payload[key].toString();

      // @todo - uncomment if desired:
      // Remove the field path ('title:', 'body.0.format:', etc.) from the error message
      /* let splitPos = error.indexOf(':');
        if (splitPos > 0) {
        error = error.substring(splitPos + 2);
      }*/

      // Convert '/' in key (ex. 'body/format') to '__'
      key = key.replace('/', '__');
      out[key] = error;
    });
    return out;
  }
});