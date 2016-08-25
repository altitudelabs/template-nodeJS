# NodeJS Template

_This is a sample template for nodeJS application_

Default features include:
- Browserify
- Babel for client side
- Serverside view templates
- browser reload
- minification
- mongoDB
- api documentation with [Api Blueprint](https://apiblueprint.org/) and (rendered with [Aglio](https://github.com/danielgtaylor/aglio) /api/doc on dev server)
- sass & css minification
- front end testing with [Karma](https://karma-runner.github.io/) [Mocha](https://mochajs.org/) [Chai](http://chaijs.com/) (gulp to watch)
- back end testing with [Mocha](https://mochajs.org/) [Chai](http://chaijs.com/) (gulp to watch)

Upcoming features
- image minification
- spritesheet generation

### Folder Structure
please refer to the wiki for high level diagram of file structure (upcoming)

### Running the project
**pre requisites**
- nodeJS v4+ (requires v4 or higher for es6)
- npm
- mongoDB (please make sure mongod is running in the background)
- [chrome live reload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

**development**
Create `default-env.js` file in `server/config/environment`.
```
cd project
npm install
nodemon server/app   #terminal 1
gulp                 #terminal 2
```
development server should be running on localhost:9000.

**production**
```
cd project
npm install
gulp build
nodemon server/app
```
