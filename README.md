## Decoupled JS app for Drupal

This repository is constructed for a JavaScript application to demostrate a Decoupled architecture with Drupal. If you have not setup your Drupal instance yet, then go to [https://github.com/jenter/decoupled-drupal](https://github.com/jenter/decoupled-drupal) and follow the quick steps.


### Setup Instructions

#### Download and install packages first

- [Node.js](https://nodejs.org/) (includes NPM) 
- [Ember CLI](https://ember-cli.com/)
- [PhantomJS](http://phantomjs.org/)

### Quick installation & setup 

- Fork this repository and download locally with ```git clone [YOUR REPO]```
- CD into your js app root with ```cd decoupled-js/```
- You will now install the required node modules with ```npm install```
- You can serve your JS app with ```npm start``` and test at ```http://localhost:8080``` 

### Additional setup and local development

– To develop with this application locally, you should address the `@todo` comments in `client/config/environment.js`, such as changing the API endpoint to a local Drupal application. Note that you will need to re-run `npm install` after changing any variables in this file.

### Preview 

#### JavaScript Application 

![js](https://content.screencast.com/users/BedimStudios/folders/Jing/media/18e9dfca-970a-45a5-b1b8-5f62a52d1439/00002386.png)

#### Drupal Website

![Drupal](https://content.screencast.com/users/BedimStudios/folders/Jing/media/0558f78c-39fa-4204-bd8f-d27598b0d29d/00002387.png)
