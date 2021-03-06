# generator-picantes-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Opinionated generator of React components with styles stories and test

## Installation

First, install [Yeoman](http://yeoman.io) and generator-picantes-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-picantes-react
```

## Usage

Then generate your new react components:

```bash
yo picantes-react:component Name
```

This will generate the following files:
- `Component.js` Main component file
- `Component.test.js` Jest simple snapshot test
- `Component.stories.js` Storybook file
- `index.js` Entry point to the component that could have an apollo wrapper 
- `styles.scss` Stylesheet for the component 

Options:

- **nostyles** Do not generate styles.scss and dont wrap component with `isomorphic-style-loader` (default: true)
- **stateless** Generate a function component instead of a class (default: true)
- **useapollo** Generate a Apollo wrapper on index.js (default: false)
- **quiet** Dont prompt (default: false)

## Development

To test local modifications run 

```bash
npm link
```

So the generator points to the local version

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Mauricio Saglietto]()


[npm-image]: https://badge.fury.io/js/generator-picantes-react.svg
[npm-url]: https://npmjs.org/package/generator-picantes-react
[travis-image]: https://travis-ci.org/msaglietto/generator-picantes-react.svg?branch=master
[travis-url]: https://travis-ci.org/msaglietto/generator-picantes-react
[daviddm-image]: https://david-dm.org/msaglietto/generator-picantes-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/msaglietto/generator-picantes-react
[coveralls-image]: https://coveralls.io/repos/msaglietto/generator-picantes-react/badge.svg
[coveralls-url]: https://coveralls.io/r/msaglietto/generator-picantes-react
