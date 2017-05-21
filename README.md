# NASANerd

It's an Angular app that uses NASA APIs, so we can nerd out on cool space stuff.

## Prerequisites

* Node 6.9.0 or higher
* NPM v3.0 or higher 
* Yarn. Follow the [Install Yarn](https://yarnpkg.com/en/docs/install) docs.
* Angular CLI. Use `npm install -g @angular/cli` to install the angular CLI

## First time use

* Configure the Angular CLI to use Yarn: `ng set --global packageManager=yarn`.
* After cloning the repo, run `yarn install`.
* Set env variables in the environment.ts, environment-staging.ts, and evnironment.prod.ts

## Development server

* `ng serve` - starts the development server. Navigate to [http://localhost:4200](http://localhost:4200)
* `ng serve --port NUMBER` - starts the development server with a custom port number.
* `ng serve --environment [ENVIRONMENT NAME]` - To serve a specific environment.

## Building

* `ng build` - to build the project. The build artifacts will be stored in the `dist/` 
* `ng build --environment [ENVIRONMENT NAME]` - to build a specific environment.
Note: additional environments must be registered in the `.angular-cli.json` file under `environments`.

## Running unit tests

`ng test` - to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

`ng e2e` - to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Heroku Deployment

* This app is Heroku deployment ready. Build environments are determined
  by the `BUILD_ENV` system environment variable.  As such, please ensure that
  you set the appropriate Config Vars for your staging and production
  environments.
* Static assets will be served from `dist/` folder
* SSL is forced
