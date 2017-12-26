/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'js-client',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fastboot: {
      hostWhitelist: ['local.decoupled.com', 'docroot.prod.acquia-sites.com', /^localhost:\d+$/]
    },
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {
      /**
       * You can also point to production location 'http://docroot.prod.acquia-sites.com'
       * then re-run `npm install` after deleting the node_modules folders.
       */
      host: (process.env.api_endpoint || 'http://local.decoupled.com'),
      oauth2TokenEndpoint: '/oauth/token',
      oauth2ClientId: '11111111-2222-3333-4444-555555555555',  // @todo - Fill in your client UUID
    }
  };

  // Map Drupal Entities to Ember models with simplified one-part names
  ENV.drupalEntityModels = {
    // @todo - map any additional Drupal entities you want to use
    "dogs": {},
    "cats": {},
    "article": {},  // Map 'article' Ember data model to Drupal/JSON API type 'node--article'
    "user": { entity: 'user', bundle: 'user' },  // Map 'user' model to 'user--user'
    "file": { entity: 'file', bundle: 'file' },  // Map 'file' model to 'file--file'
    "tag": { entity: 'taxonomy_term', bundle: 'tags' }  // Map 'tag' model to 'taxonomy-term--tags'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
