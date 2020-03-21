![Bo Raps Image](https://raw.githubusercontent.com/CliffCrerar/bohemian-rhapsody/master/src/assets/img/bhpic.jpeg)

![Node.js CI](https://github.com/CliffCrerar/bohemian-rhapsody/workflows/Node.js%20CI/badge.svg)

# Full stack end to end solution

![Master Branch](https://github.com/CliffCrerar/bohemian-rhapsody/workflows/Labeler/badge.svg?branch=master)
![Pipeline Test Branch](https://github.com/CliffCrerar/bohemian-rhapsody/workflows/Labeler/badge.svg?branch=dev&event=pipeline-test)

# A full stack demo application

Runs with fully automated CI/CD pipeline 'git push -> stage -> test-build -> run-test -> prod-build -> release'. 

Full MEAN stack application embeded in google cloud platform.

Deployed from github.

### Prerequisites

1. Nodejs
2. GIT
4. NPM

> For deployment to `Googl Cloud run`.

2. Docker desktop
2. gcloud SDK

### Resources

#### Application stack

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) with [Mongoose](https://mongoosejs.com/)
- [Express.js](Express.js)
- [Angular](https://angular.io/) with [UIKit](https://getuikit.com/) (Not Angular.js)
- [Node.js](https://nodejs.org/en/)

> MEAN Stack

#### API

- [Nabster Music API](https://developer.napster.com/)

#### Devops pipe

- [Github](https://github.com/)
- [Gloud build](https://cloud.google.com/cloud-build)
- [Gcloud run](https://cloud.google.com/run)

#### `npm` scripts

`npm run <script>`

|Script|Description|
|:---------:|:---------------------------------------------|
| `ng`| Angular CLI commmand |
| `dev:app` | Start the Angular development server on port 4200 |
| `build` | Build the Angular application |
| `test:app` | Start the Angular testing app |
| `lint` | Lint the whole application |
| `e2e` | Run application end to end |
| `start`* | Start the express server that serves a built application |
| `dev:server` | Start the express server in dev mode with nodemon |
| `test:server` | (Not implemented) Start serverside tests |
| `test-headless` | Run tests in headless browser without watch mode |
| `gcloud:test-container` | Build container and submit to gcloud container registry |
| `gcloud:prod-container` | Build container and submit to gcloud container registry |
| `gcloud:deploy` | Deploy the submitted container to cloud run |
| `docker-build` | Build container locally |
| `test`* | Run the end to end script |
