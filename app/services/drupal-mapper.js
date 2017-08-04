import DrupalMapper from 'ember-data-drupal/services/drupal-mapper';

/**
 * Customizes the drupal-mapper service provied by the ember-data-drupal
 * Ember addon.
 */
export default DrupalMapper.extend({
  /**
   * Returns true if a model is listed in the model map.
   *
   * @param modelName
   */
  isMapped(modelName) {
    return this.map.hasOwnProperty(modelName);
  },

  /**
   * Returns the mapped Ember model name for a given Drupal entity and bundle.
   *
   * @param entity
   * @param bundle
   * @returns String
   */
  modelNameFor(entity, bundle) {
    return Object.keys(this.map).find(modelName => {
      const modelMap = this.map[modelName];
      modelMap.entity = modelMap.entity || 'node';

      const bundleMatches = modelMap.bundle === bundle || modelMap.bundle === undefined && modelName === bundle;
      if (bundleMatches && modelMap.entity === entity) {
        return true;
      }
    });
  }
});
