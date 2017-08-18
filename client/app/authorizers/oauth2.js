import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

/**
 * Use the ember-simple-auth library's OAuth 2.0 functionality to add
 * 'Authorization' HTTP headers to requests sent to the Drupal backend.
 */
export default OAuth2Bearer.extend();
