import DS from 'ember-data';

/**
 * Defines the "tag" model, which holds a "Tags" Drupal taxonomy term entity.
 */
export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr(),

  // @todo - Link back to articles tagged with this tag by un-commenting this.
//  articles: DS.hasMany('article', { async: true })
});
