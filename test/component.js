'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-picantes-react:component', () => {
  it('should create source test and stories for component', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true})
      .then(() => {
        assert.file([
          'index.js',
          'Component.js',
          'Component.test.js',
          'Component.stories.js'
        ]);
      });
  });

  it('should create stylesheet and use isomorphic-style-loader when nostyles is false', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, nostyles: false})
      .then(() => {
        assert.file([
          'index.js',
          'styles.scss',
          'Component.js',
          'Component.test.js',
          'Component.stories.js'
        ]);

        assert.fileContent('Component.js', 'export default withStyles(s)(Component);');
      });
  });

  it('should create a class when stateless is false', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, stateless: false})
      .then(() => {
        assert.fileContent('Component.js', 'class Component extends React.Component');
      });
  });

  it('should create a wrapper when useapollo is true', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, useapollo: true})
      .then(() => {
        assert.fileContent('index.js', 'export default apollo');
      });
  });

  it('should also work with prompt', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withPrompts({stateless: false, nostyles: false, useapollo: true})
      .then(() => {
        assert.file([
          'index.js',
          'styles.scss',
          'Component.js',
          'Component.test.js',
          'Component.stories.js'
        ]);

        assert.fileContent('Component.js', 'export default withStyles(s)(Component);');
        assert.fileContent('Component.js', 'class Component extends React.Component');
        assert.fileContent('index.js', 'export default apollo');
      });
  });
});
