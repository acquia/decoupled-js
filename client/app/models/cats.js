import DS from 'ember-data';

/**
 * Defines the "cats" model, which holds an "Cats" Drupal entity.
 */
export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  field_hair: DS.attr(),
  field_profile: DS.belongsTo('file', { async: true })
  // field_tags: DS.hasMany('tag', { async: true }),
});