import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

/**
 * A list of MIME types that are often viewable inside a web browser. Used for
 * computing the isWebImage property in the file model.
 */
const webImageMimeTypes = [
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
  'image/webp',
  'image/x-icon',
];

/**
 * Defines the "file" model, which holds a "File" Drupal entity.
 */
export default DS.Model.extend({
  status: DS.attr('boolean'),
  filename: DS.attr(),
  filemime: DS.attr(),
  filesize: DS.attr(),
  url: DS.attr(),
  absoluteUrl: Ember.computed('url', function () {
    return ENV.APP.host + '/' + this.get('url');
  }),
//  uid: DS.belongsTo('user', { async: true }),  // @todo - uncomment here, and in route if you need the file's owner

  isWebImage: Ember.computed('filemime', function () {
    return webImageMimeTypes.includes(this.get('filemime'));
  })
});
