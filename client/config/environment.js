/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'js-client',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fastboot: {
      hostWhitelist: ['local.drupaldecoupled.com', 'docroot.prod.acquia-sites.com', /^localhost:\d+$/]  
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      host: (process.env.api_endpoint || 'http://docroot.prod.acquia-sites.com'),  // @todo - Fill in your Drupal backend URL or local http://local.drupaldecoupled.com
      oauth2TokenEndpoint: '/oauth/token',
      oauth2ClientId: '11111111-2222-3333-4444-555555555555',  // @todo - Fill in your client UUID
      // Here you can pass flags/options to your application instance
      // when it is created
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

  // if (environment === 'production') {

  // }

  return ENV;
};
