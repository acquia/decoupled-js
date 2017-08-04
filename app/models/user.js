import DS from 'ember-data';

/**
 * Defines the "user" model, which holds a "User" Drupal entity.
 */
export default DS.Model.extend({
  uuid: DS.attr(), // Need to keep this for currentUser in session service to work
  name: DS.attr(),
  mail: DS.attr(),
  status: DS.attr('boolean'),

  // Link back to articles authored by this user. This can be made a one-way relationship by commenting this out.
  articles: DS.hasMany('article', { async: true })
});
