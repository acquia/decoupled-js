import DS from 'ember-data';

/**
 * Defines the "dogs" model, which holds an "Dogs" Drupal entity.
 */
export default DS.Model.extend({
  uid: DS.belongsTo('user', { async: true }),
  title: DS.attr(),
  body: DS.attr(),
  field_size: DS.attr(),
  field_picture: DS.belongsTo('file', { async: true })
  // field_traits: DS.hasMany('tag', { async: true }),
});