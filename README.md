# feathers-mithril-webpack-pwa-starter

> A scalable, reactive example progressive messaging app integrating FeathersJS, Flow, Mithril, Webpack 4, and Babel.

## About

This progressive web application serves as an example integration of [Feathers](https://github.com/feathersjs/feathers), [Flow](https://github.com/facebook/flow), [Mithril](https://github.com/MithrilJS/mithril.js), [Webpack 4](https://github.com/webpack/webpack), and [Babel](https://github.com/babel/babel). 

## Getting Started



## Prerequisites

1. Install [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).

2. Install project dependencies and run post-install scripts: `yarn install:all`

## Development

1. Start the Feathers API server: `yarn server:dev`

2. Start the client development server in another terminal window: `yarn client:dev`

## Production

1. Start the Feathers API server: `yarn server`

2. Start the client: `yarn client:build`

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.



## Tips

#### Flow

##### Keep Flow types up to date
After adding new packages with `yarn`, run `yarn update:flow` to keep flow types up to date with the `flow-typed` community repository.


#### Feathers

##### Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ yarn global add @feathersjs/cli         # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## License

© soulofmischief 2018

Licensed under the [MIT license](LICENSE).
