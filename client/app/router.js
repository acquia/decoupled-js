import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {

  this.route('articles');
  this.route('article', {
    path: '/article/:id'
  });

  this.route('dogs');
  this.route('dog', {
    path: '/dog/:id'
  });

  this.route('cats');
  this.route('cat', {
    path: '/cat/:id'
  });

  this.route('file', {
    path: '/file/:id'
  });

  this.route('tag', {
    path: '/tag/:id'
  });

  this.route('login', {
    path: '/login'
  });

});

export default Router;
