![Bo Raps Image](https://raw.githubusercontent.com/CliffCrerar/bohemian-rhapsody/master/src/assets/img/bhpic.jpeg)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/CliffCrerar/bohemian-rhapsody)
![Pull Into Stage](https://github.com/CliffCrerar/bohemian-rhapsody/workflows/Pull%20Into%20Stage/badge.svg?branch=dev)
![Stage Test](https://github.com/CliffCrerar/bohemian-rhapsody/workflows/Stage%20Test/badge.svg?branch=stage)

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
| `dev:app` | Start the Angular development server on port 4200 |
| `build` | Build the Angular application |
| `lint`    | Lint the whole application |
| `e2e`     | Run application end to end |
| `start`*  | Start the express server that serves a built application |
| `dev:server` | Start the express server in dev mode with nodemon |
| `test:server` | (Not implemented) Start serverside tests |
| `test:headless` | Run tests in headless browser without watch mode |
| `test:dev` | run testing during development in watch mode |
| `gcloud:build`| Build container and submit to gcloud container registry |
| `gcloud:deploy`| Build container and submit to gcloud container registry |
| `gcloud:test-container` | Build container and submit to gcloud container registry |
| `gcloud:prod-container` | Build container and submit to gcloud container registry |
| `gcloud:deploy` | Deploy the submitted container to cloud run |
| `local` | Build container locally |
| `test`* | Run the end to end script |

## Tech Stack 
####by Stack Share

<a frameborder="0" data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/89e19b77f1c323c55bcf7b90d0f8d5"/></a><script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
